import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useApplyDetailPagination } from "@/hooks/committee/apply/useApplyDetailPagination";
import { useGetApplyDetailQuery } from "@/hooks/tanstack-query/committee/event/useGetApplyDetail";
import { useGetApplyDetailPageEventId } from "../apply/useGetApplyDetailPageEventId";
import { ApiResponseError } from "@/types/common/api";
import { useCommitteeCertification } from "@/hooks/committee/sign-in/useCommitteeCertification";
import { useGetEvent } from "@/hooks/tanstack-query/committee/event/useGetEvent";

export const useApplyDetail = () => {
  const { page: currentPage } = useGetPageParams();
  const { eventId } = useGetApplyDetailPageEventId();

  const { data: event, isPending: isEventPending } = useGetEvent(eventId);

  const { pagesPerGroup, queryParams, setPage } = useApplyDetailPagination(currentPage, eventId);
  const { data, isLoading, isError, error } = useGetApplyDetailQuery(queryParams);

  const { data: excel } = useGetApplyDetailQuery({ page: 0, size: 10000, direction: "asc", eventId });

  const excelData =
    excel?.content.map((applyDetail, idx) => ({
      순번: idx + 1,
      층수: applyDetail.floorNumber,
      "사물함 이름": applyDetail.lockerCode,
      학번: applyDetail.member.studentNumber,
      소속: applyDetail.member.organization,
      학과: applyDetail.member.department,
      이름: applyDetail.member.name,
      이메일: applyDetail.member.email,
    })) || [];

  useCommitteeCertification(isError, error as ApiResponseError);

  const applyDetailList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return {
    applyDetailList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage: queryParams.size,
    pagesPerGroup,
    isLoading,
    event,
    isEventPending,
    excelData: excelData,
  };
};
