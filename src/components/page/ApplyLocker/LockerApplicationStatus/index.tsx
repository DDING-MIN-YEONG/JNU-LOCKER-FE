"use client";

import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/LockerApplicationStatus/index.module.scss";
import FloorSelector from "@/components/page/ApplyLocker/FloorSelector/index";
import { useState } from "react";
import LockerStatusLegend from "@/components/page/ApplyLocker/LockerStatusLegend/index";
import LockerGrid from "@/components/page/ApplyLocker/LockerGrid/index";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function LockerApplicationStatus() {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const onSelectFloor = (floor: number) => {
    setSelectedFloor(floor);
  };
  const lockerList: { status: "complete" | "applyAble"; lockerName: string; lockerId: number }[] = [
    { status: "complete", lockerName: "1-111", lockerId: 1 },
    { status: "complete", lockerName: "1-2", lockerId: 2 },
    { status: "complete", lockerName: "1-3", lockerId: 3 },
    { status: "complete", lockerName: "1-4", lockerId: 4 },
    { status: "complete", lockerName: "1-5", lockerId: 5 },
    { status: "complete", lockerName: "1-6", lockerId: 6 },
    { status: "complete", lockerName: "1-7", lockerId: 7 },
    { status: "complete", lockerName: "1-7", lockerId: 8 },
    { status: "complete", lockerName: "1-7", lockerId: 9 },
    { status: "complete", lockerName: "1-7", lockerId: 10 },
    { status: "applyAble", lockerName: "1-7", lockerId: 11 },
    { status: "applyAble", lockerName: "1-7", lockerId: 12 },
    { status: "applyAble", lockerName: "1-7", lockerId: 13 },
    { status: "applyAble", lockerName: "1-7", lockerId: 14 },
    { status: "applyAble", lockerName: "1-7", lockerId: 15 },
    { status: "applyAble", lockerName: "1-7", lockerId: 16 },
    { status: "applyAble", lockerName: "1-7", lockerId: 17 },
    { status: "applyAble", lockerName: "1-7", lockerId: 18 },
    { status: "applyAble", lockerName: "1-7", lockerId: 19 },
    { status: "applyAble", lockerName: "1-7", lockerId: 20 },
    { status: "applyAble", lockerName: "1-7", lockerId: 21 },
    { status: "applyAble", lockerName: "1-7", lockerId: 22 },
    { status: "applyAble", lockerName: "1-7", lockerId: 23 },
    { status: "applyAble", lockerName: "1-7", lockerId: 24 },
    { status: "applyAble", lockerName: "1-7", lockerId: 25 },
    { status: "applyAble", lockerName: "1-7", lockerId: 26 },
    { status: "applyAble", lockerName: "1-7", lockerId: 27 },
    { status: "applyAble", lockerName: "1-7", lockerId: 28 },
    { status: "applyAble", lockerName: "1-7", lockerId: 29 },
    { status: "applyAble", lockerName: "1-7", lockerId: 30 },
  ];

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3" className={cn("title")}>
        사물함 신청 현황
      </Txt>
      <div className={cn("contentContainer")}>
        <FloorSelector floors={[1, 2, 3]} selectedFloor={selectedFloor} onSelectFloor={onSelectFloor} />
        <div className={cn("lockerStatusContainer")}>
          <LockerStatusLegend />
        </div>
        <LockerGrid LockerList={lockerList} className={cn("gridContainer")} />
      </div>
    </div>
  );
}
