"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import StudentLogo from "@/components/common/StudentLogo";
import Button from "@/components/design-system/Button";
import { useStudentLogout } from "@/hooks/tanstack-query/student/auth/useStudentLogout";
import Spinner from "@/components/common/Spinner";

const cn = classNames.bind(styles);

interface ApplyHeaderProps {
  showLogoutButton?: boolean;
}

export default function ApplyHeader({ showLogoutButton = true }: ApplyHeaderProps) {
  const { isLogoutLoading, onStudentLogout } = useStudentLogout();

  return (
    <>
      <header className={cn("header")}>
        <Link href={ROUTE.STUDENT.DEPARTMENT_INFO}>
          <StudentLogo width={100} height={50} />
        </Link>
        {showLogoutButton && (
          <Button color="red" className={cn("logout")} onClick={onStudentLogout} disabled={isLogoutLoading}>
            로그아웃
          </Button>
        )}
      </header>
      {isLogoutLoading && <Spinner />}
    </>
  );
}
