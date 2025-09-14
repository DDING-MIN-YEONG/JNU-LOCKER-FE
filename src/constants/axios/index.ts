import { AxiosRequestConfig, AxiosResponse } from "axios";

export const RETRY_HEADER_KEY = "_retry";

interface QueuedRequest {
  resolve: (value: AxiosResponse) => void;
  reject: (reason: Error) => void;
  config: AxiosRequestConfig;
}

export const REQUEST_QUEUE: QueuedRequest[] = [];

export const REFRESH_TOKEN_ERROR_MESSAGE = "토큰 갱신에 실패했습니다.";
