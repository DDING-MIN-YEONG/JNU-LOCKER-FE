"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useMyRegistrationLocker } from "@/hooks/student/apply-locker/useMyRegistrationLocker";
import Txt from "@/components/design-system/Txt";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function ApplyLockerStatusTable() {
  const { myRegistrationLocker, onDeleteMyRegistrationLocker, isPending, isError } = useMyRegistrationLocker();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return null;
  }

  return (
    <table className={cn("container")}>
      <thead>
        <tr className={cn("header")}>
          <th className={cn("th")}>
            <Txt weight="semiBold">층수</Txt>
          </th>
          <th className={cn("th")}>
            <Txt weight="semiBold">사물함 번호</Txt>
          </th>
          <th className={cn("th")}>
            <Txt weight="semiBold">삭제</Txt>
          </th>
        </tr>
      </thead>
      {myRegistrationLocker && (
        <tbody>
          <tr key={myRegistrationLocker.lockerId}>
            <td className={cn("td")}>{myRegistrationLocker.floorNumber}층</td>
            <td className={cn("td")}>{myRegistrationLocker.lockerName}</td>
            <td className={cn("deleteBtnContainer")}>
              <button className={cn("deleteBtn")} onClick={onDeleteMyRegistrationLocker}>
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
