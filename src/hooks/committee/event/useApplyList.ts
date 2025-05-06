import { useGetEventPageParams } from "@/hooks/committee/event/useGetEventPageParams";
import { useEventPagination } from "@/hooks/committee/event/useEventPagination";
import { useGetApplyListQuery } from "@/hooks/tanstack-query/committee/event/useGetApplyList";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useApplyList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetEventPageParams();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data } = useGetApplyListQuery(queryParams);

  const eventList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onApplyClick = (eventId: number) => {
    router.push(`${ROUTE.COMMITTEE.APPLY_LIST}/${eventId}`);
  };

  return {
    eventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onApplyClick,
  };
};
