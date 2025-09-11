"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import { useEventList } from "@/hooks/committee/event/useEventList";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function EventList() {
  const {
    eventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    onChangeEventPublish,
    isLoading,
    onEventClick,
    isChangeEventLoading,
  } = useEventList();

  return (
    <>
      <div className={cn("container")}>
        <div className={cn("header")}>
          <Txt color="primary" size="h3" weight="medium">
            이벤트 목록
          </Txt>
          <Link href={ROUTE.COMMITTEE.CREATE_EVENT} className={cn("createEvent")}>
            <Txt color="white" size="h6">
              이벤트 생성
            </Txt>
          </Link>
        </div>
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
              <th className={cn("tableHeader")}>
                <Txt color="white" weight="medium">
                  게시 상태
                </Txt>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5}>
                  <Skeleton className={cn("skeleton")} />
                </td>
              </tr>
            ) : eventList.length > 0 ? (
              eventList.map((event) => (
                <tr key={event.id} className={cn("tr")} onClick={() => onEventClick(event.id)}>
                  <td className={cn("tableData")}>
                    <Txt size="h6">{event.title}</Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt size="h6">{`${formatToKoreanTime(event.startAt)} ~ ${formatToKoreanTime(event.endAt)}`}</Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt size="h6">{event.status}</Txt>
                  </td>
                  <td className={cn("tableData", "toggleCell")} onClick={(e) => e.stopPropagation()}>
                    <div className={cn("toggleContainer")}>
                      <span className={cn("toggleLabel")}>
                        <Txt size="h6">{event.publish ? "공개" : "비공개"}</Txt>
                      </span>
                      <label className={cn("toggle")}>
                        <input
                          type="checkbox"
                          checked={event.publish}
                          onChange={(e) => {
                            e.stopPropagation();
                            onChangeEventPublish(event.id, e.target.checked);
                          }}
                          disabled={isChangeEventLoading}
                          className={cn("toggleInput")}
                        />
                        <span className={cn("toggleSlider")}></span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={cn("tr")}>
                <td colSpan={5} className={cn("tableData")}>
                  <Txt size="h6">이벤트가 없습니다.</Txt>
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
    </>
  );
}
