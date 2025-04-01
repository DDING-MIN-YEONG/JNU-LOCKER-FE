import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/LockerItem/index.module.scss";

const cn = classNames.bind(styles);

interface LockerItemProps {
  status: "complete" | "applyAble";
  lockerName: string;
}

export default function LockerItem({ status, lockerName }: LockerItemProps) {
  return <div className={cn("container", status)}>{lockerName}</div>;
}
