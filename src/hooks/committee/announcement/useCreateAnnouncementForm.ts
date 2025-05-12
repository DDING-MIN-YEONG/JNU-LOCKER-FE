import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";
import { ChangeEvent, useState } from "react";
import { CreateAnnouncementForm } from "@/types/committee/announcement";
import { useCreateAnnouncement } from "@/hooks/tanstack-query/committee/announcement/useCreateAnnouncement";
import { createAnnouncementValidator } from "@/functions/validator/createAnnouncementValidator";
import { convertCreateAnnouncementForm } from "@/functions/convertCreateAnnouncementForm";
import { CREATE_ANNOUNCEMENT_VALIDATION } from "@/constants/validation/createAnnouncement";

export const useCreateAnnouncementForm = () => {
  const [formData, setFormData] = useState<CreateAnnouncementForm>({
    title: "",
    content: "",
    participationDepartmentIds: [],
    affiliation: {
      id: 0,
      value: "값을 선택해주세요.",
    },
  });
  const { onCreateAnnouncement: createAnnouncement } = useCreateAnnouncement();

  let organizations = useOrganizationsQuery("학생회");

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  const onSelectOrganizations = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    setFormData((prev) => ({
      ...prev,
      affiliation: {
        id: selectedId,
        value: value,
      },
    }));
  };

  const onSelectDepartment = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    const isDuplicate = formData.participationDepartmentIds.some((department) => department.id === selectedId);

    if (isDuplicate) {
      alert(CREATE_ANNOUNCEMENT_VALIDATION.department.duplicate);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      participationDepartmentIds: [
        ...prev.participationDepartmentIds,
        {
          id: selectedId,
          value: value,
        },
      ],
    }));
  };

  const onDeleteDepartment = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      participationDepartmentIds: prev.participationDepartmentIds.filter((department) => department.id !== id),
    }));
  };

  const onCreateAnnouncement = () => {
    if (!createAnnouncementValidator(formData)) {
      return;
    }

    const { announcement } = convertCreateAnnouncementForm(formData);

    createAnnouncement(announcement);
  };

  return {
    formData,
    setFormData,
    onCreateAnnouncement,
    organizations,
    departments,
    onSelectDepartment,
    onDeleteDepartment,
    onSelectOrganizations,
  };
};
