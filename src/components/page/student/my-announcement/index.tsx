"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import MyAnnouncementDetailInfoForm from "@/components/page/student/my-announcement/MyAnnouncementDetailInfoForm";
import { useMyAnnouncementDetailForm } from "@/hooks/student/announcement/useMyAnnouncementDetailForm";
import Skeleton from "@/components/common/Skeleton";
import LeftArrowBtn from "@/components/common/LeftArrowBtn";

const cn = classNames.bind(styles);

export default function MyAnnouncementDetail() {
  const { formData, isPending, isError } = useMyAnnouncementDetailForm();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={cn("container")}>
      <LeftArrowBtn />
      <Txt color="primary" size="h3" weight="medium">
        공지사항
      </Txt>
      <MyAnnouncementDetailInfoForm formData={formData} />
    </div>
  );
}
