import DepartmentLayout from "@/components/Layout/DepartmentLayout";
import DepartmentInfoAnnouncement from "@/components/page/student/DepartmentInfo/DepartmentInfoAnnouncement/index";
import DepartmentInfoApplyLocker from "@/components/page/student/DepartmentInfo/DepartmentInfoApplyLocker/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function DepartmentInfo() {
  return (
    <DepartmentLayout affiliation="공과대학" department="컴퓨터정보통신공학과">
      <div className={cn("container")}>
        <DepartmentInfoAnnouncement />
        <DepartmentInfoApplyLocker />
      </div>
    </DepartmentLayout>
  );
}
