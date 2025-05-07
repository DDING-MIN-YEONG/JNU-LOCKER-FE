import axios from "axios";
import { postReissue } from "@/apis/common/token";

export const https = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}v1/`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

https.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await postReissue();

      return https(originalRequest);
    }

    return Promise.reject(error);
  },
);
