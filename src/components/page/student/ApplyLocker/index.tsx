"use client";

import AffiliationLayout from "@/components/Layout/AffiliationLayout";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerApplicationStatus from "@/components/page/student/ApplyLocker/LockerApplicationStatus/index";
import ApplyLockerForm from "@/components/page/student/ApplyLocker/Form/index";
import MyLockerApplicationStatus from "@/components/page/student/ApplyLocker/MyLockerApplicationStatus/index";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  const { data, isPending, isError } = useGetMyInfo();

  if (isPending || isError) {
    return;
  }
  return (
    <AffiliationLayout affiliation={data?.affiliation} containerClassName={cn("layout")}>
      <div className={cn("container")}>
        <LockerApplicationStatus />
        <div className={cn("formApplicationStatusContainer")}>
          <ApplyLockerForm />
          <MyLockerApplicationStatus />
        </div>
      </div>
    </AffiliationLayout>
  );
}
