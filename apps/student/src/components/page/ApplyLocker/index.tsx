"use client";

import AffiliationContainer from "@/components/Layout/AffiliationContainer";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerApplicationStatus from "@/components/page/ApplyLocker/LockerApplicationStatus/index";
import ApplyLockerForm from "@/components/page/ApplyLocker/Form/index";
import MyLockerApplicationStatus from "@/components/page/ApplyLocker/MyLockerApplicationStatus/index";
import ApplyInfo from "@/components/page/ApplyLocker/ApplyInfo";
import LeftArrowBtn from "@/components/common/LeftArrowBtn";
import useApplyLocker from "@/hooks/apply-locker/useApplyLocker";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  const { formAction, formData, onChange, error, isApplyLockerLoading, setLockerFormData } = useApplyLocker();

  return (
    <div className={cn("container")}>
      <LeftArrowBtn />
      <AffiliationContainer />
      <ApplyInfo />
      <div className={cn("contentContainer")}>
        <LockerApplicationStatus setLockerFormData={setLockerFormData} />
        <div className={cn("formApplicationStatusContainer")}>
          <ApplyLockerForm
            formAction={formAction}
            formData={formData}
            onChange={onChange}
            error={error}
            isApplyLockerLoading={isApplyLockerLoading}
          />
          <MyLockerApplicationStatus />
        </div>
      </div>
    </div>
  );
}
