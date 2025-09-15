import axios from "axios";

export const baseInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

baseInstance.interceptors.request.use((config) => {
  const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
