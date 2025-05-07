import axios from "axios";

export const baseInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}v1/`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
