"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import { useAnnouncementForm } from "@/hooks/announcement/useAnnouncementForm";
import AnnouncementDetailForm from "./AnnouncementDetailInfoForm";

const cn = classNames.bind(styles);

export default function AnnouncementDetail() {
  const {
    formData,
    setFormData,
    organizations,
    departments,
    onDeleteDepartment,
    onSelectDepartment,
    onSelectOrganizations,
    onPutAnnouncement,
    isPutMode,
    onClickEditButton,
    date,
    isUpdate,
    onDeleteAnnouncement,
    isDeleteAnnouncementLoading,
    isPutAnnouncementLoading,
  } = useAnnouncementForm();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        공지사항
      </Txt>
      <AnnouncementDetailForm
        formData={formData}
        setFormData={setFormData}
        organizations={organizations}
        departments={departments}
        onDeleteDepartment={onDeleteDepartment}
        onSelectDepartment={onSelectDepartment}
        onSelectOrganizations={onSelectOrganizations}
        onPutAnnouncement={onPutAnnouncement}
        isPutMode={isPutMode}
        onClickEditButton={onClickEditButton}
        date={date}
        isUpdate={isUpdate}
        onDeleteAnnouncement={onDeleteAnnouncement}
        isDeleteAnnouncementLoading={isDeleteAnnouncementLoading}
        isPutAnnouncementLoading={isPutAnnouncementLoading}
      />
    </div>
  );
}
