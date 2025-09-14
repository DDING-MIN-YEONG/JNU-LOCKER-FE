import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerItem from "@/components/page/ApplyLocker/LockerItem/index";
import Skeleton from "@/components/common/Skeleton";

const cn = classNames.bind(styles);

interface LockerGirdProps {
  lockerList: { available: boolean; code: string; lockerId: string }[];
  className?: string;
  isLockerLoading: boolean;
  setLockerFormData: (lockerName: string, floor: number) => void;
  selectedFloor: number;
}

export default function LockerGrid({
  lockerList,
  className,
  isLockerLoading,
  setLockerFormData,
  selectedFloor,
}: LockerGirdProps) {
  if (isLockerLoading) {
    return <Skeleton className={cn("skeleton")} />;
  }

  return (
    <div className={cn("container", className)}>
      {lockerList.map(({ code, available, lockerId }) => (
        <LockerItem
          lockerName={code}
          available={available}
          key={lockerId}
          onClick={() => setLockerFormData(code, selectedFloor)}
        />
      ))}
    </div>
  );
}
