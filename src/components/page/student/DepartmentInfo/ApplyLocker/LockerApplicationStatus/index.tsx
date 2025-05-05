"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import FloorSelector from "@/components/page/student/DepartmentInfo/ApplyLocker/FloorSelector/index";
import LockerStatusLegend from "@/components/page/student/DepartmentInfo/ApplyLocker/LockerStatusLegend/index";
import LockerGrid from "@/components/page/student/DepartmentInfo/ApplyLocker/LockerGrid/index";
import Txt from "@/components/design-system/Txt";
import { useLockerList } from "@/hooks/student/apply-locker/useLockerList";

const cn = classNames.bind(styles);

export default function LockerApplicationStatus() {
  const { selectedLockerList, floorList, selectedFloor, onSelectFloor } = useLockerList();

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3" className={cn("title")}>
        사물함 신청 현황
      </Txt>
      <div className={cn("contentContainer")}>
        <FloorSelector floors={floorList} selectedFloor={selectedFloor} onSelectFloor={onSelectFloor} />
        <div className={cn("lockerStatusContainer")}>
          <LockerStatusLegend />
        </div>
        <LockerGrid lockerList={selectedLockerList} className={cn("gridContainer")} />
      </div>
    </div>
  );
}
