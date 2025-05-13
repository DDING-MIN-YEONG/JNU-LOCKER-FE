import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useAnnouncementPagination } from "@/hooks/committee/announcement/useAnnouncementPagination";
import { useGetAnnouncementListQuery } from "@/hooks/tanstack-query/committee/announcement/useGetAnnouncementListQuery";

export const useAnnouncementList = () => {
  const router = useRouter();
  const { page: currentPage } = useGetPageParams();
  const { pagesPerGroup, queryParams, setPage } = useAnnouncementPagination(currentPage);

  const { data, isLoading } = useGetAnnouncementListQuery(queryParams);

  const announcementList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const onAnnouncementClick = (eventId: string) => {
    router.push(`${ROUTE.COMMITTEE.ANNOUNCEMENT}/${eventId}`);
  };

  return {
    announcementList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    onAnnouncementClick,
    isLoading,
  };
};
