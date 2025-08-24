import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { postReissue } from "@/apis/common/token";
import { baseInstance } from "./baseInstance";
// 재시도 헤더 키 상수
const RETRY_HEADER_KEY = "retry";

export const https = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

https.interceptors.request.use((config) => {
  const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

interface QueuedRequest {
  resolve: (value: AxiosResponse) => void;
  reject: (reason: Error) => void;
  config: AxiosRequestConfig;
}

const requestQueue: QueuedRequest[] = [];

let isRefreshing = false;

const isTokenError = (error: AxiosError): boolean => {
  return error.response?.status === 401;
};

const canRetryRequest = (config: AxiosRequestConfig | undefined): boolean => {
  return config !== undefined && !config.headers?.[RETRY_HEADER_KEY];
};

const refreshAccessToken = async (): Promise<string> => {
  const result = await postReissue();
  if (!result) {
    throw new Error("토큰 갱신에 실패했습니다.");
  }
  return result.accessToken;
};

const processQueue = (error: Error | null, token: string | null = null): void => {
  requestQueue.forEach(({ resolve, reject, config }) => {
    if (error) {
      reject(error);
      return;
    }
    if (token) {
      const configCopy: AxiosRequestConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      if (configCopy.headers) {
        delete configCopy.headers[RETRY_HEADER_KEY];
      }
      baseInstance(configCopy).then(resolve).catch(reject);
    }
  });
  requestQueue.length = 0;
  isRefreshing = false;
};

https.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (!isTokenError(error) || !canRetryRequest(originalRequest)) {
      return Promise.reject(error);
    }

    if (originalRequest?.headers) {
      originalRequest.headers[RETRY_HEADER_KEY] = true;
    }

    return new Promise<AxiosResponse>((resolve, reject) => {
      requestQueue.push({ resolve, reject, config: originalRequest! });

      if (isRefreshing) {
        return;
      }

      isRefreshing = true;

      // 토큰 갱신 시도
      refreshAccessToken()
        .then((newAccessToken) => {
          processQueue(null, newAccessToken);
        })
        .catch((refreshError) => {
          processQueue(refreshError, null);
        });
    });
  },
);
