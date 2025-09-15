import { CREATE_ANNOUNCEMENT_VALIDATION } from "@/constants/validation/createAnnouncement";
import { CreateAnnouncementForm } from "@/types/announcement";

export const createAnnouncementValidator = (formData: CreateAnnouncementForm) => {
  if (!formData.title) {
    alert(CREATE_ANNOUNCEMENT_VALIDATION.title.required);
    return false;
  }

  if (!formData.content) {
    alert(CREATE_ANNOUNCEMENT_VALIDATION.content.required);
    return false;
  }

  if (formData.participationDepartmentIds.length === 0) {
    alert(CREATE_ANNOUNCEMENT_VALIDATION.department.required);
    return false;
  }

  return true;
};
