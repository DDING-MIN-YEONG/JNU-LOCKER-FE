"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Button from "@/components/design-system/Button";
import { useEventList } from "@/hooks/committee/event/useEventList";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function EventList() {
  const {
    eventList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    onDeleteEvent,
    onChangeEventPublish,
  } = useEventList();

  return (
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
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                게시 상태
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                게시
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                관리
              </Txt>
            </th>
          </tr>
        </thead>
        <tbody>
          {eventList.map((event) => (
            <tr key={event.id} className={cn("tr")}>
              <td className={cn("tableData")}>
                <Txt size="h6">{event.title}</Txt>
              </td>
              <td className={cn("tableData")}>
                <Txt size="h6">{`${formatToKoreanTime(event.startAt)} ~ ${formatToKoreanTime(event.endAt)}`}</Txt>
              </td>
              <td className={cn("tableData")}>
                <Txt size="h6">{event.status}</Txt>
              </td>
              <td className={cn("tableData")}>
                <Txt size="h6">{event.publish === true ? "공개" : "비공개"}</Txt>
              </td>
              <td className={cn("tableData", "publish")}>
                <Button color="primary" className={cn("btn")} onClick={() => onChangeEventPublish(event.id, true)}>
                  <Txt color="white" size="h6">
                    공개
                  </Txt>
                </Button>
                <Button color="gray" className={cn("btn")} onClick={() => onChangeEventPublish(event.id, false)}>
                  <Txt size="h6">비공개</Txt>
                </Button>
              </td>
              <td className={cn("tableData", "manage")}>
                <Button
                  color="red"
                  className={cn("btn")}
                  onClick={() => {
                    if (confirm("이 이벤트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
                      onDeleteEvent(event.id);
                    }
                  }}
                >
                  <Txt color="white" size="h6">
                    삭제
                  </Txt>
                </Button>
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
