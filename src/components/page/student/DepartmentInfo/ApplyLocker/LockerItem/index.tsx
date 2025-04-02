import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

interface LockerItemProps {
  status: "complete" | "applyAble";
  lockerName: string;
}

export default function LockerItem({ status, lockerName }: LockerItemProps) {
  return (
    <div className={cn("container", status)}>
      <Txt size="h4" weight="medium" color={status === "applyAble" ? "white" : "black"} className={cn("locker")}>
        {lockerName}
      </Txt>
    </div>
  );
}
