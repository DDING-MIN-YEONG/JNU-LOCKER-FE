import { getApplyDetail } from "@/apis/committee/apply";
import { useQuery } from "@tanstack/react-query";

interface ApplyDetailQueryParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
  eventId: string;
}

export const useGetApplyDetailQuery = ({ eventId, page, size, direction = "asc" }: ApplyDetailQueryParams) => {
  return useQuery({
    queryKey: ["applyDetail", eventId, page, size, direction],
    queryFn: () => getApplyDetail(eventId, page, size, direction),
    enabled: page >= 0 && !!eventId,
  });
};
