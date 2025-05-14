import { https } from "@/apis/instance/https";
import { MyEventList } from "@/types/student/department-info";

export const getMyEvent = async () => {
  const { data } = await https.get("events/me");

  return new MyEventList(data);
};
