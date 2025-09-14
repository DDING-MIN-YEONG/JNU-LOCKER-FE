"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import CreateAnnouncementForm from "@/components/page/committee/create-announcement/CreateAnnouncementInfoForm";
import { useCreateAnnouncementForm } from "@/hooks/committee/announcement/useCreateAnnouncementForm";

const cn = classNames.bind(styles);

export default function CreateAnnouncement() {
  const {
    formData,
    setFormData,
    organizations,
    departments,
    onDeleteDepartment,
    onSelectDepartment,
    onSelectOrganizations,
    onCreateAnnouncement,
    isCreateAnnouncementLoading,
  } = useCreateAnnouncementForm();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        공지사항 작성
      </Txt>
      <CreateAnnouncementForm
        formData={formData}
        setFormData={setFormData}
        organizations={organizations}
        departments={departments}
        onDeleteDepartment={onDeleteDepartment}
        onSelectDepartment={onSelectDepartment}
        onSelectOrganizations={onSelectOrganizations}
        onCreateAnnouncement={onCreateAnnouncement}
        isCreateAnnouncementLoading={isCreateAnnouncementLoading}
      />
    </div>
  );
}
