import { MyEventList } from "@/apis/dtos/student/event";
import { https } from "@/apis/instance/https";

export const getMyEventList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(`events/me?page=${page}&size=${size}&direction=${direction}&sort=createdAt`);

  return new MyEventList(data);
};
