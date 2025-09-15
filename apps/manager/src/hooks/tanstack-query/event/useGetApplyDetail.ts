import { getApplyDetail } from "@/apis/apply";
import { ApplyDetailList } from "@/apis/dtos/apply";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

interface ApplyDetailQueryParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
  eventId: string;
}

export const useGetApplyDetailQuery = ({ eventId, page, size, direction = "asc" }: ApplyDetailQueryParams) => {
  return useQuery<ApplyDetailList, ApiResponseError>({
    queryKey: ["applyDetail", eventId, page, size, direction],
    queryFn: () => getApplyDetail(eventId, page, size, direction),
    enabled: page >= 0 && !!eventId,
  });
};
