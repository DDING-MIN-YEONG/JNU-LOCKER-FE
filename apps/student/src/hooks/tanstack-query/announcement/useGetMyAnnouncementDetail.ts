import { getMyAnnouncementDetail } from "@/apis/announcement";
import { useQuery } from "@tanstack/react-query";

export const useGetMyAnnouncementDetail = (announcementId: string) => {
  return useQuery({
    queryKey: ["myAnnouncementDetail", announcementId],
    queryFn: () => getMyAnnouncementDetail(announcementId),
    enabled: !!announcementId,
  });
};
