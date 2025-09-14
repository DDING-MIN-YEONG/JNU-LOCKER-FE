"use client";

import ApplyHeader from "@/components/common/ApplyHeader";
import MyEventList from "@/components/page/my-event-list";
import { Suspense } from "react";

export default function MyEventListPage() {
  return (
    <>
      <ApplyHeader />
      <Suspense>
        <MyEventList />
      </Suspense>
    </>
  );
}
