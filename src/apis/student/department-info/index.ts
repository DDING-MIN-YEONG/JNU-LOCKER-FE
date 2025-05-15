import { https } from "@/apis/instance/https";
import { MyAnnouncementList, MyEventList } from "@/types/student/department-info";

// Todo : 매직 넘버 제거
export const getMyEvent = async () => {
  const { data } = await https.get("events/me?page=0&size=100&direction=desc&sort=createdAt");

  return new MyEventList(data);
};

export const getMyAnnouncement = async () => {
  const { data } = await https.get("announces/me?page=0&size=1&direction=desc&sort=createdAt");

  return new MyAnnouncementList(data);
};
