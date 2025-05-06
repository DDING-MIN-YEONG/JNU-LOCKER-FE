"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import { useApplyList } from "@/hooks/committee/event/useApplyList";

const cn = classNames.bind(styles);

export default function ApplyList() {
  const { eventList, totalElements, currentPage, setPage, itemsPerPage, pagesPerGroup, onApplyClick } = useApplyList();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        신청 목록
      </Txt>
      <table className={cn("table")}>
        <thead className={cn("tableHeaderContainer")}>
          <tr>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이벤트명
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이벤트 기간
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                상태
              </Txt>
            </th>
          </tr>
        </thead>
        <tbody>
          {eventList.map((event) => (
            <tr className={cn("tr")} key={event.id} onClick={() => onApplyClick(event.id)}>
              <td className={cn("tableData")}>
                <Txt size="h6">{event.title}</Txt>
              </td>
              <td className={cn("tableData")}>
                <Txt size="h6">{`${formatToKoreanTime(event.startAt)} ~ ${formatToKoreanTime(event.endAt)}`}</Txt>
              </td>
              <td className={cn("tableData")}>
                <Txt size="h6">{event.status}</Txt>
              </td>
            </tr>
          ))}
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
