"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Skeleton from "@/components/common/Skeleton";
import { useMyEventList } from "@/hooks/student/event/useMyEventList";
import LeftArrowBtn from "@/components/common/LeftArrowBtn";

const cn = classNames.bind(styles);

export default function MyEventList() {
  const { myEventList, totalElements, currentPage, setPage, itemsPerPage, pagesPerGroup, onEventClick, isLoading } =
    useMyEventList();

  return (
    <div className={cn("container")}>
      <LeftArrowBtn />
      <Txt color="primary" size="h3" weight="medium">
        이벤트 목록
      </Txt>
      <table>
        <thead className={cn("tableHeaderContainer")}>
          <tr>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium" className={cn("tableHeaderTitle")}>
                제목
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium" className={cn("tableHeaderTitle")}>
                작성자
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium" className={cn("tableHeaderTitle")}>
                이벤트 시간
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
            {myEventList.length > 0 ? (
              myEventList.map((myEvent) => (
                <tr className={cn("tr")} key={myEvent.id} onClick={() => onEventClick(myEvent.id)}>
                  <td className={cn("tableData")}>
                    <Txt size="h6" className={cn("tableBodyTitle")}>
                      {myEvent.title}
                    </Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt size="h6" className={cn("tableBodyTitle")}>
                      {myEvent.departmentNickname}
                    </Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt
                      size="h6"
                      className={cn("tableBodyTitle")}
                    >{`${formatToKoreanTime(myEvent.startAt)} ~ ${formatToKoreanTime(myEvent.endAt)}`}</Txt>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={cn("tr")}>
                <td colSpan={3} className={cn("tableData")}>
                  <Txt size="h6" className={cn("tableBodyTitle")}>
                    이벤트가 없습니다.
                  </Txt>
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
