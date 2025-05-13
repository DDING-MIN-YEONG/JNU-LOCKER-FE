import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useEventPagination } from "@/hooks/committee/event/useEventPagination";
import { useGetApplyListQuery } from "@/hooks/tanstack-query/committee/event/useGetApplyList";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useApplyList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data, isLoading } = useGetApplyListQuery(queryParams);

  const applyList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onApplyClick = (eventId: string) => {
    router.push(`${ROUTE.COMMITTEE.APPLY_LIST}/${eventId}`);
  };

  return {
    applyList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onApplyClick,
    isLoading,
  };
};
