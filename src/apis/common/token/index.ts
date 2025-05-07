import { baseInstance } from "@/apis/instance/baseInstance";

export const postReissue = async () => {
  try {
    await baseInstance.post("auth/reissue", {});
  } catch (error) {
    console.log(error);
  }
};
