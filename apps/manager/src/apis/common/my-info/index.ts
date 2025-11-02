import { MyInfo } from "@/apis/dtos/common/my-info";
import { https } from "@/apis/instance/https";

export const getMyInfo = async () => {
  const response = await https.get("members/info");

  return {
    data: new MyInfo(response.data),
    status: response.status,
  };
};

export const postLogout = async () => {
  await https.post("auth/logout", {});
};
