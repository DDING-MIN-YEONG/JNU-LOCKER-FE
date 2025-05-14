"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import { useAnnouncementForm } from "@/hooks/committee/announcement/useAnnouncementForm";
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
      />
    </div>
  );
}
