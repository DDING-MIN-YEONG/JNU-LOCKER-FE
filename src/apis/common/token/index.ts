import { LoginInfo } from "@/apis/dtos/common/my-info";
import { baseInstance } from "@/apis/instance/baseInstance";

export const postReissue = async () => {
  try {
    const { data } = await baseInstance.post("auth/reissue", {});

    return new LoginInfo(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};
