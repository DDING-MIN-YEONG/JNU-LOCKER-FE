import { getApproveWaitList } from "@/apis/committee/approve-wait";
import { useQuery } from "@tanstack/react-query";

interface ApproveWaitListQueryParams {
  page: number;
  size: number;
  direction: "asc" | "desc";
}

export const useGetApproveWaitListQuery = ({ page, size, direction }: ApproveWaitListQueryParams) => {
  return useQuery({
    queryKey: ["approveWait", page, size, direction],
    queryFn: () => getApproveWaitList(page, size, direction),
    enabled: page >= 0,
  });
};
