import { useGetPageParams } from "@/hooks/common/useGetPageParams";
import { useApplyDetailPagination } from "@/hooks/apply/useApplyDetailPagination";
import { useGetApplyDetailQuery } from "@/hooks/tanstack-query/committee/event/useGetApplyDetail";
import { useGetApplyDetailPageEventId } from "../apply/useGetApplyDetailPageEventId";
import { ApiResponseError } from "@/types/common/api";
import { useCommitteeCertification } from "@/hooks/sign-in/useCommitteeCertification";
import { useGetEvent } from "@/hooks/tanstack-query/committee/event/useGetEvent";

export const useApplyDetail = () => {
  const { page: currentPage } = useGetPageParams();
  const { eventId } = useGetApplyDetailPageEventId();

  const { data: event, isPending: isEventPending } = useGetEvent(eventId);

  const { pagesPerGroup, queryParams, setPage } = useApplyDetailPagination(currentPage, eventId);
  const { data, isLoading, isError, error } = useGetApplyDetailQuery(queryParams);

  const { data: excel, isPending: isExcelDownLoading } = useGetApplyDetailQuery({
    page: 0,
    size: 10000,
    direction: "asc",
    eventId,
  });

  const excelData =
    excel?.content
      .slice()
      .sort((a, b) => {
        if (a.floorNumber !== b.floorNumber) {
          return a.floorNumber - b.floorNumber;
        }

        return a.lockerCode.localeCompare(b.lockerCode, undefined, { numeric: true });
      })
      .map((applyDetail) => ({
        층수: `${applyDetail.floorNumber}층`,
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
    isExcelDownLoading,
  };
};
