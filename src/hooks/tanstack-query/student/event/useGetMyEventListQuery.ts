import { getMyEventList } from "@/apis/student/event";
import { useQuery } from "@tanstack/react-query";

interface MyEventListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetMyEventListQuery = ({ page, size, direction }: MyEventListQueryParams) => {
  return useQuery({
    queryKey: ["myEventList", page, size, direction],
    queryFn: () => getMyEventList(page, size, direction),
    enabled: page >= 0,
  });
};
