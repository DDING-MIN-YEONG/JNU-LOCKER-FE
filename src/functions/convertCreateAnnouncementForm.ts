import { CreateAnnouncementForm } from "@/types/committee/announcement";

export const convertCreateAnnouncementForm = (formData: CreateAnnouncementForm) => {
  const announcement = {
    title: formData.title,
    content: formData.content,
    participationDepartmentIds: formData.participationDepartmentIds.map((department) => department.id),
  };

  return { announcement };
};
