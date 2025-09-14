import classNames from "classnames/bind";
import styles from "./index.module.scss";
import ApplyLockerStatusTable from "@/components/page/ApplyLocker/ApplyLockerStatusTable/index";
import Txt from "@repo/ui/design-system/Txt/index";

const cn = classNames.bind(styles);

export default function MyLockerApplicationStatus() {
  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3" className={cn("title")}>
        나의 사물함 신청 현황
      </Txt>
      <ApplyLockerStatusTable />
    </div>
  );
}
