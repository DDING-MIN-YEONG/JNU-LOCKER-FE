import { useGetEventListQuery } from "@/hooks/tanstack-query/committee/event/useGetEventList";
import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useEventPagination } from "@/hooks/committee/event/useEventPagination";
import { usePutEventPublish } from "@/hooks/tanstack-query/committee/event/usePutEventPublish";
import { useCommitteeCertification } from "../sign-in/useCommitteeCertification";
import { ApiResponseError } from "@/types/common/api";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useEventList = () => {
  const { page: currentPage } = useGetPageParams();
  const router = useRouter();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data, isLoading, isError, error } = useGetEventListQuery(queryParams);
  useCommitteeCertification(isError, error as ApiResponseError);

  const { onChangeEventPublish } = usePutEventPublish(queryParams);

  const eventList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onEventClick = (eventId: string) => {
    router.push(`${ROUTE.COMMITTEE.EVENT}/${eventId}`);
  };

  return {
    eventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onChangeEventPublish,
    isLoading,
    onEventClick,
  };
};
