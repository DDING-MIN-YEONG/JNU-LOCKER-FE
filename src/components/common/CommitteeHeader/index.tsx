"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";
import Logo from "@/components/common/Logo/index";
import Skeleton from "../Skeleton";
import { useCommitteeHeader } from "@/hooks/common/useCommitteeHeader";
import { useCommitteeLogout } from "@/hooks/tanstack-query/committee/auth/useCommitteeLogout";
import Button from "@/components/design-system/Button";

const cn = classNames.bind(styles);

export default function CommitteeHeader() {
  const { data, isError, isPending, path } = useCommitteeHeader();
  const { isLogoutLoading, onCommitteeLogout } = useCommitteeLogout();

  if (isError) {
    return null;
  }

  return (
    <header className={cn("header")}>
      <Link href={ROUTE.COMMITTEE.APPLY_LIST} className={cn("logo")}>
        <Logo height={100} width={100} />
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
            color={path.includes("announcement-list") || path.includes("announcement") ? "primary" : "black"}
          >
            공지사항
          </Txt>
        </Link>
        <Link href={ROUTE.COMMITTEE.EVENT_LIST}>
          <Txt className={cn("headerTitle")} weight="medium" color={path.includes("event-list") ? "primary" : "black"}>
            이벤트
          </Txt>
        </Link>
        {isPending ? (
          <Skeleton className={cn("linkSkeleton")} />
        ) : (
          data?.role === "MANAGER" && (
            <Link href={ROUTE.COMMITTEE.APPROVE_WAIT}>
              <Txt
                className={cn("headerTitle")}
                weight="medium"
                color={path.includes("approve-wait") ? "primary" : "black"}
              >
                승인 대기
              </Txt>
            </Link>
          )
        )}
      </div>
      {isPending ? (
        <Skeleton className={cn("skeleton")} />
      ) : (
        <div className={cn("departmentContainer")}>
          <div className={cn("affiliationText")}>
            <Txt className={cn("headerTitle")}>{data?.affiliation}</Txt>
          </div>
          <Button color="red" className={cn("logoutButton")} onClick={onCommitteeLogout} disabled={isLogoutLoading}>
            로그아웃
          </Button>
        </div>
      )}
    </header>
  );
}
