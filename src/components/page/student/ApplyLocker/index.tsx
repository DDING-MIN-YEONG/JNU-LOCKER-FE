"use client";

import AffiliationContainer from "@/components/Layout/AffiliationContainer";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerApplicationStatus from "@/components/page/student/ApplyLocker/LockerApplicationStatus/index";
import ApplyLockerForm from "@/components/page/student/ApplyLocker/Form/index";
import MyLockerApplicationStatus from "@/components/page/student/ApplyLocker/MyLockerApplicationStatus/index";
import ApplyInfo from "@/components/page/student/ApplyLocker/ApplyInfo";
import LeftArrowBtn from "@/components/common/LeftArrowBtn";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  return (
    <div className={cn("container")}>
      <LeftArrowBtn />
      <AffiliationContainer />
      <ApplyInfo />
      <div className={cn("contentContainer")}>
        <LockerApplicationStatus />
        <div className={cn("formApplicationStatusContainer")}>
          <ApplyLockerForm />
          <MyLockerApplicationStatus />
        </div>
      </div>
    </div>
  );
}
