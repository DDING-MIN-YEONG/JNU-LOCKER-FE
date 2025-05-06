import { useGetEventListQuery } from "@/hooks/tanstack-query/committee/event/useGetEventList";
import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useEventPagination } from "@/hooks/committee/event/useEventPagination";
import { useDeleteEvent } from "@/hooks/tanstack-query/committee/event/useDeleteEvent";
import { usePutEventPublish } from "@/hooks/tanstack-query/committee/event/usePutEventPublish";

export const useEventList = () => {
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data } = useGetEventListQuery(queryParams);

  const { onDeleteEvent } = useDeleteEvent(queryParams);

  const { onChangeEventPublish } = usePutEventPublish(queryParams);

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
    onChangeEventPublish,
  };
};
