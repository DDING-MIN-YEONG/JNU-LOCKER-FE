import { AnnouncementDetail, AnnouncementList } from "@/apis/dtos/announcement";
import { https } from "@/apis/instance/https";
import { CreateAnnouncementFormRequest, PutAnnouncementFormRequest } from "@/types/announcement";

export const postCreateAnnouncement = async (formData: CreateAnnouncementFormRequest) => {
  await https.post("announces", formData);
};

export const getAnnouncementList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(`announces?page=${page}&size=${size}&direction=${direction}&sort=createdAt`);

  return new AnnouncementList(data);
};

export const getAnnouncement = async (announcementId: string) => {
  const { data } = await https.get(`announces/${announcementId}`);

  return new AnnouncementDetail(data);
};

export const putAnnouncement = async ({
  formData,
  announcementId,
}: {
  formData: PutAnnouncementFormRequest;
  announcementId: string;
}) => {
  await https.put(`announces/${announcementId}`, formData);
};

export const deleteAnnouncement = async (announcementId: string) => {
  await https.delete(`announces/${announcementId}`);
};
