import { MyInfo } from "@/apis/dtos/common/my-info";

// 일반적인 API 에러 (서버에서 응답을 받은 경우)
export interface ApiResponseError {
  message: string;
  response: {
    status: number;
    data: {
      message: string;
      code: string;
      invalidParams?: {
        field: string;
        message: string;
      }[];
    };
  };
}

// CORS 에러 또는 네트워크 에러 (서버에 도달하지 못한 경우)
export interface CorsError {
  message: "Network Error";
  code: "ERR_NETWORK";
}

// Axios 에러의 통합 타입
export type AxiosError = ApiResponseError | CorsError;

// 에러 타입을 구분하는 타입 가드 함수들
export const isApiResponseError = (error: any): error is ApiResponseError => {
  return error?.response?.status !== undefined && error?.response?.data !== undefined;
};

export const isCorsError = (error: any): error is CorsError => {
  return error?.message === "Network Error" || error?.code === "ERR_NETWORK";
};

export interface MyInfoResponse {
  data: MyInfo;
  status: number;
}
