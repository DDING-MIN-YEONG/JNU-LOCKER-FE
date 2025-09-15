"use client";

import AffiliationLabel from "@/components/common/AffiliationLabel";
import { useStudentMyInfo } from "@/hooks/common/useStudentMyInfo";
import Skeleton from "@repo/ui/common/Skeleton/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

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
