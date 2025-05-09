import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

interface LockerItemProps {
  available: boolean;
  lockerName: string;
}

export default function LockerItem({ available, lockerName }: LockerItemProps) {
  return (
    <div className={cn("container", available ? "applyAble" : "complete")}>
      <Txt size="h4" weight="medium" color={available ? "white" : "black"} className={cn("locker")}>
        {lockerName}
      </Txt>
    </div>
  );
}
