"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import AnnouncementList from "@/components/page/committee/announcement-list";
import { Suspense } from "react";

export default function AnnouncementListPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <AnnouncementList />
      </Suspense>
    </>
  );
}
