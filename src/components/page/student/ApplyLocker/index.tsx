import DepartmentLayout from "@/components/Layout/DepartmentLayout";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerApplicationStatus from "@/components/page/student/ApplyLocker/LockerApplicationStatus/index";
import ApplyLockerForm from "@/components/page/student/ApplyLocker/Form/index";
import MyLockerApplicationStatus from "@/components/page/student/ApplyLocker/MyLockerApplicationStatus/index";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  return (
    <DepartmentLayout affiliation="공과대학" department="컴퓨터정보통신공학과" containerClassName={cn("layout")}>
      <div className={cn("container")}>
        <LockerApplicationStatus />
        <div className={cn("formApplicationStatusContainer")}>
          <ApplyLockerForm />
          <MyLockerApplicationStatus />
        </div>
      </div>
    </DepartmentLayout>
  );
}
