import { getMyAnnouncementList } from "@/apis/student/announcement";
import { useQuery } from "@tanstack/react-query";

interface MyAnnouncementListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetMyAnnouncementListQuery = ({ page, size, direction }: MyAnnouncementListQueryParams) => {
  return useQuery({
    queryKey: ["myAnnouncementList", page, size, direction],
    queryFn: () => getMyAnnouncementList(page, size, direction),
    enabled: page >= 0,
  });
};
