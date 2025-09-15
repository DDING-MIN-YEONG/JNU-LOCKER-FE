import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";

const cn = classNames.bind(styles);

interface FloorSelectorProps {
  floors: number[];
  selectedFloor: number;
  onSelectFloor: (floor: number) => void;
}

export default function FloorSelector({ floors, onSelectFloor, selectedFloor }: FloorSelectorProps) {
  return (
    <div className={cn("container")}>
      {floors.map((floor) => (
        <button
          key={floor}
          onClick={() => onSelectFloor(floor)}
          className={cn("floor", { selected: selectedFloor === floor })}
        >
          <Txt size="h2" weight="medium">
            {floor}층
          </Txt>
        </button>
      ))}
    </div>
  );
}
