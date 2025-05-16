"use client";

import MyEventList from "@/components/page/student/my-event-list";
import { Suspense } from "react";

export default function MyEventListPage() {
  return (
    <>
      <Suspense>
        <MyEventList />
      </Suspense>
    </>
  );
}
