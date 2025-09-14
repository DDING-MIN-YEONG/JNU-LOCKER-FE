"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import { useLockerInfo } from "@/hooks/student/apply-locker/useLockerInfo";
import { formatToKoreanTime } from "@/utils/date";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function ApplyInfo() {
  const { lockerInfo, isError, isPending } = useLockerInfo();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError || !lockerInfo) {
    return null;
  }

  return (
    <div className={cn("container")}>
      <Txt weight="bold" size="h3" className={cn("title")}>
        제목 : {lockerInfo.title}
      </Txt>
      <Txt weight="bold" size="h3" className={cn("title")}>
        시간 : {formatToKoreanTime(lockerInfo.startAt)} ~ {formatToKoreanTime(lockerInfo.endAt)}
      </Txt>
    </div>
  );
}
