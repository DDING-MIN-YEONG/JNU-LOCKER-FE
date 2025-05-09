"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import AffiliationLabel from "@/components/common/AffiliationLabel";
import Skeleton from "@/components/common/Skeleton";
import { useStudentMyInfo } from "@/hooks/common/useStudentMyInfo";

const cn = classNames.bind(styles);

export default function AffiliationContainer() {
  const { data, isError, isPending } = useStudentMyInfo();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={cn("container")}>
      <AffiliationLabel affiliation={`${data?.affiliation}`} labelClassName={cn("label")} />
    </div>
  );
}
