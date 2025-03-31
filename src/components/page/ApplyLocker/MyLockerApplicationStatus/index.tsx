import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/MyLockerApplicationStatus/index.module.scss";
import ApplyLockerStatusTable from "@/components/page/ApplyLocker/ApplyLockerStatusTable/index";

const cn = classNames.bind(styles);

export default function MyLockerApplicationStatus() {
  return (
    <div className={cn("container")}>
      <p className={cn("title")}>나의 사물함 신청 현황</p>
      <ApplyLockerStatusTable />
    </div>
  );
}
