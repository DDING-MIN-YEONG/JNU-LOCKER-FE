"use client";

import CommitteeHeader from "@/components/common/CommitteeHeader";
import EventList from "@/components/page/committee/event-list";
import { Suspense } from "react";

export default function EventListPage() {
  return (
    <>
      <CommitteeHeader />
      <Suspense>
        <EventList />
      </Suspense>
    </>
  );
}
