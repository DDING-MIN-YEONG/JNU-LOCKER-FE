import classNames from "classnames/bind";
import styles from "@/components/page/DepartmentInfo/ApplyLocker/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function ApplyLocker() {
  return (
    <div className={cn("container")}>
      <p className={cn("title")}>사물함 신청</p>
      <div className={cn("applyContainer")}>
        <p className={cn("applyTitle")}>{`2025-1 사물함 신청`}</p>
        <div className={cn("applyContentContainer")}>
          <p>신청 시작 시간 : 2025.03.09 (일) 10:00</p>
          <p>신청 종료 시간 : 2025.03.10 (월) 18:00</p>
          <p>사물함 여석 개수 : 20개</p>
        </div>
        <Link href={ROUTE.APPLY_LOCKER} className={cn("applyLink")}>
          신청하러 가기
        </Link>
      </div>
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT_LIST} className={cn("moreLink")}>
          더보기
        </Link>
      </div>
    </div>
  );
}
