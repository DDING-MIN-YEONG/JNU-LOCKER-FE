"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import Pagination from "@/components/common/Pagination";
import { useApplyDetail } from "@/hooks/committee/event/useApplyDetail";

const cn = classNames.bind(styles);

export default function ApplyDetail() {
  const { ApplyDetailList, totalElements, currentPage, setPage, itemsPerPage, pagesPerGroup } = useApplyDetail();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        사물함 신청 현황
      </Txt>
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
          {ApplyDetailList.map(({ floorNumber, id, lockerCode, member }) => (
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
