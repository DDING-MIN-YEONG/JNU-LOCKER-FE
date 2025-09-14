"use client";

import ApplyHeader from "@/components/common/ApplyHeader";
import MyAnnouncementList from "@/components/page/student/my-announcement-list";
import { Suspense } from "react";

export default function MyAnnouncementListPage() {
  return (
    <>
      <ApplyHeader />
      <Suspense>
        <MyAnnouncementList />
      </Suspense>
    </>
  );
}
