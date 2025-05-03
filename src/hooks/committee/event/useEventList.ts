import { useGetEventListQuery } from "@/hooks/tanstack-query/committee/event/useGetEventList";
import { useGetEventPageParams } from "@/hooks/committee/event/useGetEventPageParams";
import { useEventPagination } from "@/hooks/committee/event/useEventPagination";
import { useDeleteEvent } from "@/hooks/tanstack-query/committee/event/useDeleteEvent";

export const useEventList = () => {
  const { page: currentPage } = useGetEventPageParams();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data } = useGetEventListQuery(queryParams);

  const { onDeleteEvent } = useDeleteEvent(queryParams);

  const eventList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return {
    eventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onDeleteEvent,
  };
};
