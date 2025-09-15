import { LoginInfo } from "@/apis/dtos/common/my-info";
import axios from "axios";

export const postReissue = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}v1/auth/reissue`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    return new LoginInfo(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};
