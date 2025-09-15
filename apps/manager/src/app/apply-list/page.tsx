"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import ApplyList from "@/components/page/apply-list";
import { Suspense } from "react";

export default function ApplyListPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <ApplyList />
      </Suspense>
    </>
  );
}
