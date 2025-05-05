import classNames from "classnames/bind";
import styles from "./index.module.scss";
import LockerItem from "@/components/page/student/DepartmentInfo/ApplyLocker/LockerItem/index";

const cn = classNames.bind(styles);

interface LockerGirdProps {
  lockerList: { available: boolean; code: string; lockerId: number }[];
  className?: string;
}

export default function LockerGrid({ lockerList, className }: LockerGirdProps) {
  return (
    <div className={cn("container", className)}>
      {lockerList.map(({ code, available, lockerId }) => (
        <LockerItem lockerName={code} available={available} key={lockerId} />
      ))}
    </div>
  );
}
