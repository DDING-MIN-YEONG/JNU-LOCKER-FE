"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import AffiliationLabel from "@/components/common/AffiliationLabel";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import Skeleton from "@/components/common/Skeleton";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useEffect } from "react";

const cn = classNames.bind(styles);

export default function AffiliationContainer() {
  const router = useRouter();
  const { data, isPending, isError, error } = useGetMyInfo();

  useEffect(() => {
    if (isError && error.response.status === 401) {
      alert("로그인 후 이용해주세요.");
      router.push(ROUTE.STUDENT.MAIN);
    }
  }, [isError, error, router]);

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={cn("container")}>
      <AffiliationLabel affiliation={data.affiliation} labelClassName={cn("label")} />
    </div>
  );
}
