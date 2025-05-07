import { baseInstance } from "@/apis/instance/baseInstance";

export const postReissue = async () => {
  try {
    await baseInstance.post("auth/reissue", {});

    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};
