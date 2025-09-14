"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import AnnouncementDetail from "@/components/page/committee/announcement";
import { Suspense } from "react";

export default function AnnouncementDetailPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <AnnouncementDetail />
      </Suspense>
    </>
  );
}
