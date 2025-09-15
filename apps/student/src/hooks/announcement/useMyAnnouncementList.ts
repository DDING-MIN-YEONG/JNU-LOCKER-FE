import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useMyAnnouncementPagination } from "@/hooks/announcement/useMyAnnouncementPagination";
import { useGetMyAnnouncementListQuery } from "@/hooks/tanstack-query/announcement/useGetMyAnnouncementListQuery";

export const useMyAnnouncementList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useMyAnnouncementPagination(currentPage);

  const { data, isLoading } = useGetMyAnnouncementListQuery(queryParams);

  const myAnnouncementList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onAnnouncementClick = (id: number) => {
    router.push(`${ROUTE.MY_ANNOUNCEMENT}/${id}`);
  };

  return {
    myAnnouncementList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onAnnouncementClick,
    isLoading,
  };
};
