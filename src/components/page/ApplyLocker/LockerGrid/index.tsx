import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/LockerGrid/index.module.scss";
import LockerItem from "@/components/page/ApplyLocker/LockerItem/index";

const cn = classNames.bind(styles);

interface LockerGirdProps {
  LockerList: { status: "complete" | "applyAble"; lockerName: string; lockerId: number }[];
  className?: string;
}

export default function LockerGrid({ LockerList, className }: LockerGirdProps) {
  return (
    <div className={cn("container", className)}>
      {LockerList.map(({ lockerName, status, lockerId }) => (
        <LockerItem lockerName={lockerName} status={status} key={lockerId} />
      ))}
    </div>
  );
}
