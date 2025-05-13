import { AnnouncementList } from "@/apis/dtos/committee/announcement";
import { https } from "@/apis/instance/https";
import { CreateAnnouncementFormRequest } from "@/types/committee/announcement";

export const postCreateAnnouncement = async (formData: CreateAnnouncementFormRequest) => {
  await https.post("announces", formData);
};

export const getAnnouncementList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(`announces?page=${page}&size=${size}&direction=${direction}&sort=createdAt`);

  return new AnnouncementList(data);
};
