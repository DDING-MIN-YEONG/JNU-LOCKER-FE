"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import AffiliationLabel from "@/components/common/AffiliationLabel";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function AffiliationContainer() {
  const { data, isPending, isError } = useGetMyInfo();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return;
  }

  return (
    <div className={cn("container")}>
      <AffiliationLabel affiliation={data.affiliation} labelClassName={cn("label")} />
    </div>
  );
}
