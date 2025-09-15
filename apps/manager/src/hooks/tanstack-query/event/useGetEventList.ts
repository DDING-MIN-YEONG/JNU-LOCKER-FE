import { getEventList } from "@/apis/event";
import { EventList } from "@/apis/dtos/event";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

interface EventListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetEventListQuery = ({ page, size, direction }: EventListQueryParams) => {
  return useQuery<EventList, ApiResponseError>({
    queryKey: ["eventList", page, size, direction],
    queryFn: () => getEventList(page, size, direction),
    enabled: page >= 0,
  });
};
