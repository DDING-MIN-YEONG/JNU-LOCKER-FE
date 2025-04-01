import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/FloorSelector/index.module.scss";

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
          {floor}층
        </button>
      ))}
    </div>
  );
}
