import DepartmentLayout from "@/components/Layout/DepartmentLayout";

import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/index.module.scss";
import LockerApplicationStatus from "@/components/page/ApplyLocker/LockerApplicationStatus/index";
import ApplyLockerForm from "@/components/page/ApplyLocker/Form/index";
import MyLockerApplicationStatus from "@/components/page/ApplyLocker/MyLockerApplicationStatus/index";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  return (
    <DepartmentLayout affiliation="공과대학" department="컴퓨터정보통신공학과">
      <div className={cn("container")}>
        <LockerApplicationStatus />
        <ApplyLockerForm />
        <MyLockerApplicationStatus />
      </div>
    </DepartmentLayout>
  );
}
