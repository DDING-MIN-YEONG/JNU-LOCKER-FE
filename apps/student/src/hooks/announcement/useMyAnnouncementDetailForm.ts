import { useEffect, useState } from "react";
import { useGetAnnouncementId } from "@/hooks/common/useGetPageAnnouncementId";
import { MyAnnouncementDetailForm } from "@/types/student/announcement";
import { useGetMyAnnouncementDetail } from "@/hooks/tanstack-query/student/announcement/useGetMyAnnouncementDetail";

export const useMyAnnouncementDetailForm = () => {
  const { announcementId } = useGetAnnouncementId();

  const { data, isPending, isError } = useGetMyAnnouncementDetail(announcementId);

  const [formData, setFormData] = useState<MyAnnouncementDetailForm>({
    title: "",
    content: "",
    createdAt: null,
    updatedAt: null,
    writer: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        writer: data.writer,
      });
    }
  }, [data]);

  return {
    formData,
    isPending,
    isError,
  };
};
