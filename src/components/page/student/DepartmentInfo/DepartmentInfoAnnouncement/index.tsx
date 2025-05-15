"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";
import { useGetMyAnnouncement } from "@/hooks/tanstack-query/student/department-info/useGetMyAnnouncement";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

export default function DepartmentInfoAnnouncement() {
  const { data, isPending, isError } = useGetMyAnnouncement();

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return null;
  }

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3">
        공지사항
      </Txt>
      <div className={cn("announcementContainer")}>
        <Link href={`${ROUTE.STUDENT.MY_ANNOUNCEMENT}/${data.content[0].id}`}>
          <Txt className={cn("announcement")} size="h4">
            {data.content[0].title}
          </Txt>
        </Link>
      </div>
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.STUDENT.MY_ANNOUNCEMENT_LIST}>
          <Txt size="tiny" className={cn("moreLink")}>
            더보기
          </Txt>
        </Link>
      </div>
    </div>
  );
}
