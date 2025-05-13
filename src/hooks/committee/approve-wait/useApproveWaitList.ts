import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useApproveWaitPagination } from "./useApproveWaitPagination";
import { useGetApproveWaitListQuery } from "@/hooks/tanstack-query/committee/approve-wait/useGetApproveWaitListQuery";
import { usePostApprove } from "@/hooks/tanstack-query/committee/approve-wait/usePostApprove";

export const useApproveWaitList = () => {
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useApproveWaitPagination(currentPage);

  const { data, isLoading } = useGetApproveWaitListQuery(queryParams);

  const { onApprove } = usePostApprove();

  const approveWaitList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return {
    approveWaitList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    isLoading,
    onApprove,
  };
};
