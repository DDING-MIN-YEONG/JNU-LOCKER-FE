"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { useApplyDetail } from "@/hooks/committee/apply/useApplyDetail";
import Skeleton from "@/components/common/Skeleton";
import { formatToKoreanTime } from "@/utils/date";

const cn = classNames.bind(styles);

export default function ApplyDetail() {
  const {
    applyDetailList,
    isLoading,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    event,
    isEventPending,
  } = useApplyDetail();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        사물함 신청 현황
      </Txt>
      {isEventPending ? (
        <Skeleton className={cn("eventSkeleton")} />
      ) : (
        <>
          <Txt weight="bold" size="h5" className={cn("title")}>
            제목 : {event?.title}
          </Txt>
          <Txt weight="bold" size="h5" className={cn("title")}>
            시간 : {event?.startAt ? formatToKoreanTime(event.startAt) : ""} ~
            {event?.endAt ? formatToKoreanTime(event.endAt) : ""}
          </Txt>
        </>
      )}
      <table className={cn("table")}>
        <thead className={cn("tableHeaderContainer")}>
          <tr>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                층수
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                사물함 이름
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                학번
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                소속
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                학과
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이름
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이메일
              </Txt>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7}>
                <Skeleton className={cn("skeleton")} />
              </td>
            </tr>
          ) : applyDetailList.length > 0 ? (
            applyDetailList.map(({ floorNumber, id, lockerCode, member }) => (
              <tr className={cn("tr")} key={id}>
                <td className={cn("tableData")}>
                  <Txt size="h6">{floorNumber}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{lockerCode}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{member.studentNumber}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{member.organization}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{member.department}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{member.name}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{member.email}</Txt>
                </td>
              </tr>
            ))
          ) : (
            <tr className={cn("tr")}>
              <td colSpan={7} className={cn("tableData")}>
                <Txt size="h6">신청 현황이 없습니다.</Txt>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        pagesPerGroup={pagesPerGroup}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalElements}
        setPage={setPage}
      />
    </div>
  );
}
