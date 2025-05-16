import { getEventList } from "@/apis/committee/event";
import { EventList } from "@/apis/dtos/committee/event";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

interface ApplyListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetApplyListQuery = ({ page, size, direction }: ApplyListQueryParams) => {
  return useQuery<EventList, ApiResponseError>({
    queryKey: ["applyList", page, size, direction],
    queryFn: () => getEventList(page, size, direction),
    enabled: page >= 0,
  });
};
