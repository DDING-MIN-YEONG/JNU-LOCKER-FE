import { getEventList } from "@/apis/committee/event";
import { useQuery } from "@tanstack/react-query";

interface ApplyListQueryParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const useGetApplyListQuery = ({ page, size, direction = "asc" }: ApplyListQueryParams) => {
  return useQuery({
    queryKey: ["applyList", page, size, direction],
    queryFn: () => getEventList(page, size, direction),
    enabled: page >= 0,
  });
};
