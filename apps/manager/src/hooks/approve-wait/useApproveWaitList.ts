import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useApproveWaitPagination } from "./useApproveWaitPagination";
import { useGetApproveWaitListQuery } from "@/hooks/tanstack-query/approve-wait/useGetApproveWaitListQuery";
import { usePostApprove } from "@/hooks/tanstack-query/approve-wait/usePostApprove";
import { ApiResponseError } from "@/types/common/api";
import { useCommitteeCertification } from "@/hooks/sign-in/useCommitteeCertification";
import { usePostRejectApproveWait } from "@/hooks/tanstack-query/approve-wait/usePostRejectApproveWait";

export const useApproveWaitList = () => {
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useApproveWaitPagination(currentPage);

  const { data, isLoading, isError, error } = useGetApproveWaitListQuery(queryParams);
  useCommitteeCertification(isError, error as ApiResponseError);

  const { onApprove } = usePostApprove();

  const { onReject } = usePostRejectApproveWait();

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
    onReject,
  };
};
