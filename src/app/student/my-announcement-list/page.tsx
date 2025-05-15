"use client";

import MyAnnouncementList from "@/components/page/student/my-announcement-list";
import { Suspense } from "react";

export default function MyAnnouncementListPage() {
  return (
    <>
      <Suspense>
        <MyAnnouncementList />
      </Suspense>
    </>
  );
}
