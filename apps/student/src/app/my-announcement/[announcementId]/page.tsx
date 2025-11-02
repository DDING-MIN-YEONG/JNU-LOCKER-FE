"use client";

import ApplyHeader from "@/components/common/ApplyHeader";
import ChatBot from "@/components/common/ChatBot";
import MyAnnouncementDetail from "@/components/page/my-announcement";
import { Suspense } from "react";

export default function MyAnnouncementDetailPage() {
  return (
    <>
      <ApplyHeader />
      <Suspense>
        <MyAnnouncementDetail />
      </Suspense>
      <ChatBot />
    </>
  );
}
