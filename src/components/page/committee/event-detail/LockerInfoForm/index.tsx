import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { EventDetailForm } from "@/types/committee/event";
import Button from "@/components/design-system/Button";
import EventDetailFloorInfoForm from "../FloorInfoForm";

const cn = classNames.bind(styles);

interface EventDetailLockerInfoFormProps {
  formData: EventDetailForm;
  onAddFloor: () => void;
  onChangeFloorNumber: (floorId: number, floorNumber: number) => void;
  onAddPrefix: (floorId: number) => void;
  onChangePrefix: (floorId: number, prefixId: number | string, lockerPrefix: string) => void;
  onAddRange: (floorId: number, prefixId: number | string) => void;
  onChangeRange: (
    floorId: number,
    prefixId: number | string,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeleteFloor: (floorId: number) => void;
  onDeletePrefix: (floorId: number, prefixId: number | string) => void;
  onDeleteRange: (floorId: number, prefixId: number | string, rangeId: number) => void;
  onPutEvent: () => void;
  isPutMode: boolean;
  onPutClick: () => void;
}

export default function EventDetailLockerInfoForm({
  formData,
  onAddFloor,
  onChangeFloorNumber,
  onAddPrefix,
  onChangePrefix,
  onAddRange,
  onChangeRange,
  onDeleteFloor,
  onDeletePrefix,
  onDeleteRange,
  onPutEvent,
  isPutMode,
  onPutClick,
}: EventDetailLockerInfoFormProps) {
  return (
    <>
      <div>
        <header className={cn("header")}>
          <Txt weight="medium">층수 정보</Txt>
        </header>
        <div className={cn("floorContainer")}>
          {formData.floors.map((floor) => (
            <EventDetailFloorInfoForm
              floorData={floor}
              key={floor.floorId}
              onChangeFloorNumber={onChangeFloorNumber}
              onAddPrefix={onAddPrefix}
              onChangePrefix={onChangePrefix}
              onAddRange={onAddRange}
              onChangeRange={onChangeRange}
              onDeleteFloor={onDeleteFloor}
              onDeletePrefix={onDeletePrefix}
              onDeleteRange={onDeleteRange}
              isPutMode={isPutMode}
            />
          ))}
        </div>
      </div>
      {isPutMode && (
        <Button className={cn("addFloorBtn")} color="blue" onClick={onAddFloor}>
          <Txt size="h6" color="white">
            + 층 추가
          </Txt>
        </Button>
      )}
      <Button className={cn("createEventBtn")} color="primary" onClick={isPutMode ? onPutEvent : onPutClick}>
        <Txt size="h6" color="white">
          {isPutMode ? "수정 완료" : "수정 하기"}
        </Txt>
      </Button>
    </>
  );
}
