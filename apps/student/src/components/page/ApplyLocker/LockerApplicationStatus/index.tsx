"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import FloorSelector from "@/components/page/ApplyLocker/FloorSelector/index";
import LockerStatusLegend from "@/components/page/ApplyLocker/LockerStatusLegend/index";
import LockerGrid from "@/components/page/ApplyLocker/LockerGrid/index";
import Txt from "@repo/ui/design-system/Txt/index";
import { useLockerList } from "@/hooks/apply-locker/useLockerList";

const cn = classNames.bind(styles);

interface LockerApplicationStatusProps {
  setLockerFormData: (lockerName: string, floor: number) => void;
}

export default function LockerApplicationStatus({ setLockerFormData }: LockerApplicationStatusProps) {
  const { selectedLockerList, floorList, selectedFloor, onSelectFloor, isLockerLoading } = useLockerList();

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
        <LockerGrid
          isLockerLoading={isLockerLoading}
          lockerList={selectedLockerList}
          className={cn("gridContainer")}
          setLockerFormData={setLockerFormData}
          selectedFloor={selectedFloor}
        />
      </div>
    </div>
  );
}
