"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Skeleton from "@/components/common/Skeleton";
import { useMyAnnouncementList } from "@/hooks/student/announcement/useMyAnnouncementList";

const cn = classNames.bind(styles);

export default function MyAnnouncementList() {
  const {
    myAnnouncementList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    onAnnouncementClick,
    isLoading,
  } = useMyAnnouncementList();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        공지사항 목록
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
                작성일
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
            {myAnnouncementList.length > 0 ? (
              myAnnouncementList.map((myAnnouncement) => (
                <tr className={cn("tr")} key={myAnnouncement.id} onClick={() => onAnnouncementClick(myAnnouncement.id)}>
                  <td className={cn("tableData")}>
                    <Txt size="h6" className={cn("tableBodyTitle")}>
                      {myAnnouncement.title}
                    </Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt size="h6" className={cn("tableBodyTitle")}>
                      {myAnnouncement.writer}
                    </Txt>
                  </td>
                  <td className={cn("tableData")}>
                    <Txt
                      size="h6"
                      className={cn("tableBodyTitle")}
                    >{`${formatToKoreanTime(myAnnouncement.createdAt)}`}</Txt>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={cn("tr")}>
                <td colSpan={3} className={cn("tableData")}>
                  <Txt size="h6" className={cn("tableBodyTitle")}>
                    공지사항이 없습니다.
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
