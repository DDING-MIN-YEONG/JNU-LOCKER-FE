import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useEventPagination } from "@/hooks/event/useEventPagination";
import { useGetApplyListQuery } from "@/hooks/tanstack-query/event/useGetApplyList";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useCommitteeCertification } from "@/hooks/sign-in/useCommitteeCertification";
import { ApiResponseError } from "@/types/common/api";

export const useApplyList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useEventPagination(currentPage);

  const { data, isLoading, isError, error } = useGetApplyListQuery(queryParams);

  useCommitteeCertification(isError, error as ApiResponseError);

  const applyList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onApplyClick = (eventId: string) => {
    router.push(`${ROUTE.APPLY_LIST}/${eventId}`);
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
