import classNames from "classnames/bind";
import styles from "@/components/page/DepartmentInfo/DepartmentInfoApplyLocker/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function DepartmentInfoApplyLocker() {
  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3">
        사물함 신청
      </Txt>
      <div className={cn("applyContainer")}>
        <Txt className={cn("applyTitle")} weight="bold" size="h3">{`2025-1 사물함 신청`}</Txt>
        <div className={cn("applyContentContainer")}>
          <Txt size="small">신청 시작 시간 : 2025.03.09 (일) 10:00</Txt>
          <Txt size="small">신청 종료 시간 : 2025.03.10 (월) 18:00</Txt>
          <Txt size="small">사물함 여석 개수 : 20개</Txt>
        </div>
        <Link href={ROUTE.APPLY_LOCKER} className={cn("applyLink")}>
          <Txt color="white" weight="medium" size="h6">
            신청하러 가기
          </Txt>
        </Link>
      </div>
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT_LIST}>
          <Txt className={cn("moreLink")} size="tiny">
            더보기
          </Txt>
        </Link>
      </div>
    </div>
  );
}
