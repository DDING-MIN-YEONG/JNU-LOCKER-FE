import { AxiosRequestConfig, AxiosResponse } from "axios";

export const RETRY_HEADER_KEY = "_retry";

interface QueuedRequest {
  resolve: (value: AxiosResponse) => void;
  reject: (reason: Error) => void;
  config: AxiosRequestConfig;
}

export const REQUEST_QUEUE: QueuedRequest[] = [];