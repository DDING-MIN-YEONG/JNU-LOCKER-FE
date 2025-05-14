import { getAnnouncement } from "@/apis/committee/announcement";
import { useQuery } from "@tanstack/react-query";

export const useGetAnnouncement = (announcementId: string) => {
  return useQuery({
    queryKey: ["announcement", announcementId],
    queryFn: () => getAnnouncement(announcementId),
    enabled: !!announcementId,
  });
};
