"use client";

import DepartmentLayout from "@/components/Layout/DepartmentLayout";
import DepartmentInfoAnnouncement from "@/components/page/student/DepartmentInfo/DepartmentInfoAnnouncement/index";
import DepartmentInfoApplyLocker from "@/components/page/student/DepartmentInfo/DepartmentInfoApplyLocker/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";

const cn = classNames.bind(styles);

export default function DepartmentInfo() {
  const { data, isPending, isError } = useGetMyInfo();

  if (isPending || isError) {
    return;
  }

  return (
    <DepartmentLayout affiliation={data?.affiliation}>
      <div className={cn("container")}>
        <DepartmentInfoAnnouncement />
        <DepartmentInfoApplyLocker />
      </div>
    </DepartmentLayout>
  );
}
