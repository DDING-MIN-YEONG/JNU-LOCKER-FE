"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";
import ChnamLogo from "@/components/common/ChnamLogo/index";
import Skeleton from "../Skeleton";
import { useCommitteeHeader } from "@/hooks/common/useCommitteeHeader";

const cn = classNames.bind(styles);

export default function CommitteeHeader() {
  const { data, isError, isPending, path } = useCommitteeHeader();

  if (isError) {
    return null;
  }

  return (
    <header className={cn("header")}>
      <Link href={ROUTE.COMMITTEE.APPLY_LIST} className={cn("logo")}>
        <ChnamLogo height={50} width={55} />
        <Txt fontType="chnam" className={cn("headerTitle")}>
          전남대학교 사물함 신청 서비스
        </Txt>
      </Link>
      <div className={cn("linkContainer")}>
        <Link href={ROUTE.COMMITTEE.APPLY_LIST}>
          <Txt className={cn("headerTitle")} weight="medium" color={path.includes("apply-list") ? "primary" : "black"}>
            신청 목록
          </Txt>
        </Link>
        <Link href={ROUTE.COMMITTEE.ANNOUNCEMENT_LIST}>
          <Txt
            className={cn("headerTitle")}
            weight="medium"
            color={path.includes("announcement-list") ? "primary" : "black"}
          >
            공지사항
          </Txt>
        </Link>
        <Link href={ROUTE.COMMITTEE.EVENT_LIST}>
          <Txt className={cn("headerTitle")} weight="medium" color={path.includes("event-list") ? "primary" : "black"}>
            이벤트
          </Txt>
        </Link>
      </div>
      {isPending ? (
        <Skeleton className={cn("skeleton")} />
      ) : (
        <div className={cn("departmentContainer")}>
          <Txt className={cn("headerTitle")}>{data?.affiliation}</Txt>
        </div>
      )}
    </header>
  );
}
