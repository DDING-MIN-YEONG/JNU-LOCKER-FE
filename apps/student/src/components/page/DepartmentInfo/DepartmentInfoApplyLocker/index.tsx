"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import MyLockerEventCarousel from "../MyLockerEventCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useGetMyEvent } from "@/hooks/tanstack-query/department-info/useGetMyEvent";
import Skeleton from "@/components/common/Skeleton";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function DepartmentInfoApplyLocker() {
  const { data, isError, isPending } = useGetMyEvent();
  const OPTIONS: EmblaOptionsType = { containScroll: false };

  if (isPending) {
    return <Skeleton className={cn("skeleton")} />;
  }

  if (isError) {
    return;
  }

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3">
        사물함 신청
      </Txt>
      {data.content.length >= 1 ? (
        <MyLockerEventCarousel myEventList={data.content} options={OPTIONS} />
      ) : (
        <Txt className={cn("noEvent")} size="h5">
          사물함 신청 이벤트가 없습니다.
        </Txt>
      )}
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.MY_EVENT_LIST}>
          <Txt size="tiny" className={cn("moreLink")}>
            더보기
          </Txt>
        </Link>
      </div>
    </div>
  );
}
