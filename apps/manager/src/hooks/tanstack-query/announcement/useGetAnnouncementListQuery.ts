import { getAnnouncementList } from "@/apis/announcement";
import { AnnouncementList } from "@/apis/dtos/announcement";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

interface AnnouncementListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetAnnouncementListQuery = ({ page, size, direction }: AnnouncementListQueryParams) => {
  return useQuery<AnnouncementList, ApiResponseError>({
    queryKey: ["announcementList", page, size, direction],
    queryFn: () => getAnnouncementList(page, size, direction),
    enabled: page >= 0,
  });
};
