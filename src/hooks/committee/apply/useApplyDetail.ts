import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useApplyDetailPagination } from "@/hooks/committee/apply/useApplyDetailPagination";
import { useGetApplyDetailQuery } from "@/hooks/tanstack-query/committee/event/useGetApplyDetail";
import { useGetApplyDetailPageEventId } from "../apply/useGetApplyDetailPageEventId";

export const useApplyDetail = () => {
  const { page: currentPage } = useGetPageParams();
  const { eventId } = useGetApplyDetailPageEventId();

  const { pagesPerGroup, queryParams, setPage } = useApplyDetailPagination(currentPage, eventId);
  const { data, isLoading } = useGetApplyDetailQuery(queryParams);

  const ApplyDetailList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return {
    ApplyDetailList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    isLoading,
  };
};
