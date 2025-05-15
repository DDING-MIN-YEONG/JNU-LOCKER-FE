"use client";

import MyAnnouncementDetail from "@/components/page/student/my-announcement";
import { Suspense } from "react";

export default function MyAnnouncementDetailPage() {
  return (
    <Suspense>
      <MyAnnouncementDetail />
    </Suspense>
  );
}
