import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

interface LockerItemProps {
  available: boolean;
  lockerName: string;
  onClick: () => void;
}

export default function LockerItem({ available, lockerName, onClick }: LockerItemProps) {
  const handleClick = () => {
    if (available) {
      onClick();
    }
  };

  return (
    <button
      className={cn("container", available ? "applyAble" : "complete", available && "clickable")}
      onClick={handleClick}
    >
      <Txt size="h4" weight="medium" color={available ? "white" : "black"} className={cn("locker")}>
        {lockerName}
      </Txt>
    </button>
  );
}
