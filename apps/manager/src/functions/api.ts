import { ApiResponseError, CorsError } from "@/types/common/api";

// 에러 타입을 구분하는 타입 가드 함수들
export const isApiResponseError = (error: any): error is ApiResponseError => {
  return error?.response?.status !== undefined && error?.response?.data !== undefined;
};

export const isCorsError = (error: any): error is CorsError => {
  return error?.message === "Network Error" || error?.code === "ERR_NETWORK";
};
