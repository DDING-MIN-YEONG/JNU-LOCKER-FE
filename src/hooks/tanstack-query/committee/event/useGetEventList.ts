import { getEventList } from "@/apis/committee/event";
import { useQuery } from "@tanstack/react-query";

interface EventListQueryParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const useGetEventListQuery = ({ page, size, direction = "asc" }: EventListQueryParams) => {
  return useQuery({
    queryKey: ["eventList", page, size, direction],
    queryFn: () => getEventList(page, size, direction),
    enabled: page >= 0,
  });
};
