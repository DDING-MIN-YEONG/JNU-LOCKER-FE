import { MyInfo } from "@/apis/dtos/common/my-info";
import { https } from "@/apis/instance/https";

export const getMyInfo = async () => {
  const { data } = await https.get("members/info");

  return new MyInfo(data);
};
