"use client";

import AffiliationContainer from "@/components/Layout/AffiliationContainer";
import DepartmentInfoAnnouncement from "@/components/page/student/DepartmentInfo/DepartmentInfoAnnouncement/index";
import DepartmentInfoApplyLocker from "@/components/page/student/DepartmentInfo/DepartmentInfoApplyLocker/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LeftArrowBtn from "@/components/common/LeftArrowBtn";

const cn = classNames.bind(styles);

export default function DepartmentInfo() {
  return (
    <div className={cn("container")}>
      <LeftArrowBtn />
      <AffiliationContainer />
      <div className={cn("contentContainer")}>
        <DepartmentInfoAnnouncement />
        <DepartmentInfoApplyLocker />
      </div>
    </div>
  );
}
