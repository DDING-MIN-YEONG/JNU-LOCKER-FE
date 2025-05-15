import { MyAnnouncementList } from "@/apis/dtos/student/announcement";
import { https } from "@/apis/instance/https";

export const getMyAnnouncementList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(`announces/me?page=${page}&size=${size}&direction=${direction}&sort=createdAt`);

  return new MyAnnouncementList(data);
};
