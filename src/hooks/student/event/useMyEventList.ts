import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useMyEventPagination } from "../event/useMyEventPagination";
import { useGetMyEventListQuery } from "@/hooks/tanstack-query/student/event/useGetMyEventListQuery";

export const useMyEventList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useMyEventPagination(currentPage);

  const { data, isLoading } = useGetMyEventListQuery(queryParams);

  const myEventList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onEventClick = (id: string) => {
    router.push(`${ROUTE.STUDENT.APPLY_LOCKER}/${id}`);
  };

  return {
    myEventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onEventClick,
    isLoading,
  };
};
