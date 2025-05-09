"use client";

import AffiliationLayout from "@/components/Layout/AffiliationLayout";
import DepartmentInfoAnnouncement from "@/components/page/student/DepartmentInfo/DepartmentInfoAnnouncement/index";
import DepartmentInfoApplyLocker from "@/components/page/student/DepartmentInfo/DepartmentInfoApplyLocker/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function DepartmentInfo() {
  const { data, isPending, isError } = useGetMyInfo();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return;
  }

  return (
    <AffiliationLayout affiliation={data?.affiliation}>
      <div className={cn("container")}>
        <DepartmentInfoAnnouncement />
        <DepartmentInfoApplyLocker />
      </div>
    </AffiliationLayout>
  );
}
