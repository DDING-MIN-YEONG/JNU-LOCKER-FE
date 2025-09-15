"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import MyAnnouncementDetailInfoForm from "@/components/page/my-announcement/MyAnnouncementDetailInfoForm";
import { useMyAnnouncementDetailForm } from "@/hooks/announcement/useMyAnnouncementDetailForm";
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
