import { https } from "@/apis/instance/https";
import { CreateAnnouncementFormRequest } from "@/types/committee/announcement";

export const postCreateAnnouncement = async (formData: CreateAnnouncementFormRequest) => {
  await https.post("announces", formData);
};
