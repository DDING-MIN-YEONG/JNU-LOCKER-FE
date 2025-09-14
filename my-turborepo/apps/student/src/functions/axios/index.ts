import { postReissue } from "@/apis/common/token";
import { baseInstance } from "@/apis/instance/baseInstance";
import { REQUEST_QUEUE, RETRY_HEADER_KEY, REFRESH_TOKEN_ERROR_MESSAGE } from "@/constants/axios";
import { AxiosError, AxiosRequestConfig } from "axios";

export const isTokenError = (error: AxiosError): boolean => {
  return error.response?.status === 401;
};

export const canRetryRequest = (config: AxiosRequestConfig | undefined): boolean => {
  return config !== undefined && !config.headers?.[RETRY_HEADER_KEY];
};

export const refreshAccessToken = async (): Promise<string> => {
  const result = await postReissue();
  if (!result) {
    throw new Error(REFRESH_TOKEN_ERROR_MESSAGE);
  }
  return result.accessToken;
};

let IS_REFRESHING = false;

export const getIsRefreshing = () => IS_REFRESHING;

export const setIsRefreshing = (value: boolean) => {
  IS_REFRESHING = value;
};

export const processQueue = (error: Error | null, token: string | null = null): void => {
  REQUEST_QUEUE.forEach(({ resolve, reject, config }) => {
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
  REQUEST_QUEUE.length = 0;
  setIsRefreshing(false);
};
