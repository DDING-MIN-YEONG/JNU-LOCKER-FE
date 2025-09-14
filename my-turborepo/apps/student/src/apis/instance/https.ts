import axios, { AxiosResponse, AxiosError } from "axios";
import {
  canRetryRequest,
  getIsRefreshing,
  isTokenError,
  processQueue,
  refreshAccessToken,
  setIsRefreshing,
} from "@/functions/axios";
import { REQUEST_QUEUE, RETRY_HEADER_KEY } from "@/constants/axios";

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
      REQUEST_QUEUE.push({ resolve, reject, config: originalRequest! });

      if (getIsRefreshing()) {
        return;
      }

      setIsRefreshing(true);

      refreshAccessToken()
        .then((newAccessToken) => {
          processQueue(null, newAccessToken);
        })
        .catch(() => {
          processQueue(error, null);
        });
    });
  },
);
