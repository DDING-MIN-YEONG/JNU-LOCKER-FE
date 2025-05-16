import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";
import { ChangeEvent, useEffect, useState } from "react";
import { AnnouncementDetailForm } from "@/types/committee/announcement";
import { createAnnouncementValidator } from "@/functions/validator/createAnnouncementValidator";
import { CREATE_ANNOUNCEMENT_VALIDATION } from "@/constants/validation/createAnnouncement";
import { useGetAnnouncement } from "@/hooks/tanstack-query/committee/announcement/useGetAnnouncement";
import { useGetAnnouncementId } from "@/hooks/common/useGetPageAnnouncementId";
import { usePutAnnouncement } from "@/hooks/tanstack-query/committee/announcement/usePutAnnouncement";
import { useCommitteeCertification } from "@/hooks/committee/sign-in/useCommitteeCertification";
import { ApiResponseError } from "@/types/common/api";

export const useAnnouncementForm = () => {
  const { announcementId } = useGetAnnouncementId();

  const { data, isError, error } = useGetAnnouncement(announcementId);

  useCommitteeCertification(isError, error as ApiResponseError);

  const [isPutMode, setIsPutMode] = useState(false);

  const [formData, setFormData] = useState<AnnouncementDetailForm>({
    title: "",
    content: "",
    departments: [],
    createdAt: null,
    updatedAt: null,
    writer: "",
    affiliation: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    participationDepartmentIds: [],
  });

  const { onPutAnnouncement: putAnnouncement } = usePutAnnouncement(announcementId);

  let { data: organizations } = useOrganizationsQuery("학생회");

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title,
        content: data.content,
        departments: data.departments,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        writer: data.writer,
        affiliation: {
          id: 0,
          value: "값을 선택해주세요.",
        },
        participationDepartmentIds: data.departments.map((department) => ({
          id: department.id,
          value: department.name,
        })),
      });
    }
  }, [data]);

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

  const onPutAnnouncement = () => {
    if (!createAnnouncementValidator(formData)) {
      return;
    }

    putAnnouncement({
      title: formData.title,
      content: formData.content,
      participationDepartmentIds: formData.participationDepartmentIds.map((department) => department.id),
    });
    setIsPutMode(false);
  };

  const onClickEditButton = () => {
    setIsPutMode(true);
  };

  return {
    formData,
    setFormData,
    onPutAnnouncement,
    organizations,
    departments,
    onSelectDepartment,
    onDeleteDepartment,
    onSelectOrganizations,
    isPutMode,
    onClickEditButton,
  };
};
