"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import ApproveWait from "@/components/page/approve-wait";
import { Suspense } from "react";

export default function ApproveWaitPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <ApproveWait />
      </Suspense>
    </>
  );
}
