import { getAnnouncementList } from "@/apis/committee/announcement";
import { useQuery } from "@tanstack/react-query";

interface AnnouncementListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetAnnouncementListQuery = ({ page, size, direction }: AnnouncementListQueryParams) => {
  return useQuery({
    queryKey: ["announcementList", page, size, direction],
    queryFn: () => getAnnouncementList(page, size, direction),
    enabled: page >= 0,
  });
};
