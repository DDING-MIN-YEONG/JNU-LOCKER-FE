import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import MyLockerEventCarousel from "../MyLockerEventCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useGetMyEvent } from "@/hooks/tanstack-query/student/department-info/useGetMyEvent";

const cn = classNames.bind(styles);

export default function DepartmentInfoApplyLocker() {
  const { data, isError, isPending } = useGetMyEvent();
  const OPTIONS: EmblaOptionsType = { loop: true };

  if (isError || isPending) {
    return;
  }

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3">
        사물함 신청
      </Txt>
      <MyLockerEventCarousel myEventList={data} options={OPTIONS} />
    </div>
  );
}
