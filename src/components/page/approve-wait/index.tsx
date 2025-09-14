"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Button from "@/components/design-system/Button";
import Pagination from "@/components/common/Pagination";
import { formatToKoreanTime } from "@/utils/date";
import Skeleton from "@/components/common/Skeleton";
import { useApproveWaitList } from "@/hooks/committee/approve-wait/useApproveWaitList";

const cn = classNames.bind(styles);

export default function ApproveWait() {
  const {
    approveWaitList,
    totalElements,
    currentPage,
    setPage,
    itemsPerPage,
    pagesPerGroup,
    isLoading,
    onApprove,
    onReject,
  } = useApproveWaitList();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        MANAGER 가입 승인 대기 목록
      </Txt>
      <table>
        <thead className={cn("tableHeaderContainer")}>
          <tr>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                학번
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이름
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                신청일
              </Txt>
            </th>
            <th className={cn("tableHeader")}>
              <Txt color="white" weight="medium">
                이메일
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
          {isLoading ? (
            <tr>
              <td colSpan={5}>
                <Skeleton className={cn("skeleton")} />
              </td>
            </tr>
          ) : approveWaitList.length > 0 ? (
            approveWaitList.map((approveWait) => (
              <tr key={approveWait.memberId} className={cn("tr")}>
                <td className={cn("tableData")}>
                  <Txt size="h6">{approveWait.studentNumber}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{approveWait.name}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{`${formatToKoreanTime(approveWait.createdAt)}`}</Txt>
                </td>
                <td className={cn("tableData")}>
                  <Txt size="h6">{approveWait.email}</Txt>
                </td>
                <td className={cn("tableData", "publish")}>
                  <Button
                    color="primary"
                    className={cn("btn")}
                    onClick={() => onApprove({ memberId: approveWait.memberId })}
                  >
                    <Txt color="white" size="h6">
                      승인
                    </Txt>
                  </Button>
                  <Button
                    color="red"
                    className={cn("btn")}
                    onClick={() => onReject({ memberId: approveWait.memberId })}
                  >
                    <Txt size="h6" color="white">
                      거절
                    </Txt>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr className={cn("tr")}>
              <td colSpan={5} className={cn("tableData")}>
                <Txt size="h6">승인 대기 목록이 없습니다.</Txt>
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
