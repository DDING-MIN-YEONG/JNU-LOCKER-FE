"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import ApplyDetail from "@/components/page/apply-detail";
import { Suspense } from "react";

export default function ApplyDetailPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <ApplyDetail />
      </Suspense>
    </>
  );
}
