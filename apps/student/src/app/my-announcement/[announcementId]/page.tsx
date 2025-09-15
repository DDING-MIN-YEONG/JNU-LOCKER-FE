"use client";

import ApplyHeader from "@/components/common/ApplyHeader";
import MyAnnouncementDetail from "@/components/page/my-announcement";
import { Suspense } from "react";

export default function MyAnnouncementDetailPage() {
  return (
    <>
      <ApplyHeader />
      <Suspense>
        <MyAnnouncementDetail />
      </Suspense>
    </>
  );
}
