import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";
import { MyEventType } from "@/types/student/department-info";
import { formatToKoreanTime } from "@/utils/date";

const cn = classNames.bind(styles);

export default function MyLockerEvent({
  availableLockerCount,
  endAt,
  startAt,
  title,
  id,
}: Omit<MyEventType, "departmentNickname">) {
  return (
    <div className={cn("container")}>
      <Txt className={cn("applyTitle")} weight="bold" size="h3">
        {title}
      </Txt>
      <div className={cn("applyContentContainer")}>
        <Txt size="small">신청 시작 시간 : {formatToKoreanTime(startAt)}</Txt>
        <Txt size="small">신청 종료 시간 : {formatToKoreanTime(endAt)}</Txt>
        <Txt size="small">사물함 여석 개수 : {availableLockerCount}개</Txt>
      </div>
      <Link href={`${ROUTE.STUDENT.APPLY_LOCKER}/${id}`} className={cn("applyLink")}>
        <Txt color="white" weight="medium" size="h6">
          신청하러 가기
        </Txt>
      </Link>
    </div>
  );
}
