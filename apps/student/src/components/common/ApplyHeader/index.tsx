"use client";

import StudentLogo from "@/components/common/StudentLogo";
import { ROUTE } from "@/constants/routes";
import { useStudentLogout } from "@/hooks/tanstack-query/auth/useStudentLogout";
import Spinner from "@repo/ui/common/Spinner/index";
import Button from "@repo/ui/design-system/Button/index";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface ApplyHeaderProps {
  showLogoutButton?: boolean;
}

export default function ApplyHeader({ showLogoutButton = true }: ApplyHeaderProps) {
  const { isLogoutLoading, onStudentLogout } = useStudentLogout();

  return (
    <>
      <header className={cn("header")}>
        <Link href={ROUTE.DEPARTMENT_INFO}>
          <StudentLogo width={100} height={50} />
        </Link>
        {showLogoutButton && (
          <Button className={cn("logout")} onClick={onStudentLogout} disabled={isLogoutLoading}>
            로그아웃
          </Button>
        )}
      </header>
      {isLogoutLoading && <Spinner />}
    </>
  );
}
