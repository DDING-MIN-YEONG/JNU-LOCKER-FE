import { getAnnouncement } from "@/apis/announcement";
import { AnnouncementDetail } from "@/apis/dtos/announcement";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAnnouncement = (announcementId: string) => {
  return useQuery<AnnouncementDetail, ApiResponseError>({
    queryKey: ["announcement", announcementId],
    queryFn: () => getAnnouncement(announcementId),
    enabled: !!announcementId,
  });
};
