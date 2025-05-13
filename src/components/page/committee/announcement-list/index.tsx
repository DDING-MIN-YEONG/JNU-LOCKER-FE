"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Skeleton from "@/components/common/Skeleton";
import { useAnnouncementList } from "@/hooks/committee/announcement/useAnnouncementList";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function AnnouncementList() {
  const {
    announcementList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    onCreateAnnouncementClick,
    isLoading,
  } = useAnnouncementList();

  return (
    <div className={cn("container")}>
      <div className={cn("header")}>
        <Txt color="primary" size="h3" weight="medium">
          공지사항 목록
        </Txt>
        <Link href={ROUTE.COMMITTEE.CREATE_ANNOUNCEMENT} className={cn("createAnnouncement")}>
          <Txt color="white" size="h6">
            공지사항 생성
          </Txt>
        </Link>
      </div>
      <table className={cn("table")}>
        <thead className={cn("tableHeaderContainer")}>
          <tr>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                공지사항 제목
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                작성일
              </Txt>
            </th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={2}>
                <Skeleton className={cn("skeleton")} />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {announcementList.map((announcement) => (
              <tr className={cn("tr")} key={announcement.id} onClick={() => onCreateAnnouncementClick(announcement.id)}>
                <td className={cn("tableData")}>
                  <Txt size="h6">{announcement.title}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{`${formatToKoreanTime(announcement.createdAt)}`}</Txt>
                </td>
              </tr>
            ))}
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
