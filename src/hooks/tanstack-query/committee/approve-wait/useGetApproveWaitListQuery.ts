import { getApproveWaitList } from "@/apis/committee/approve-wait";
import { ApproveWaitList } from "@/apis/dtos/committee/approve-wait";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

interface ApproveWaitListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetApproveWaitListQuery = ({ page, size, direction }: ApproveWaitListQueryParams) => {
  return useQuery<ApproveWaitList, ApiResponseError>({
    queryKey: ["approveWait", page, size, direction],
    queryFn: () => getApproveWaitList(page, size, direction),
    enabled: page >= 0,
  });
};
