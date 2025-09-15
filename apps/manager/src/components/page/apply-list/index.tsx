"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import { useApplyList } from "@/hooks/apply/useApplyList";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function ApplyList() {
  const { applyList, totalElements, currentPage, setPage, itemsPerPage, pagesPerGroup, onApplyClick, isLoading } =
    useApplyList();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        신청 목록
      </Txt>
      <table>
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
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={3}>
                <Skeleton className={cn("skeleton")} />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {applyList.length > 0 ? (
              applyList.map((event) => (
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
              ))
            ) : (
              <tr className={cn("tr")}>
                <td colSpan={3} className={cn("tableData")}>
                  <Txt size="h6">신청 목록이 없습니다.</Txt>
                </td>
              </tr>
            )}
          </tbody>
        )}
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
