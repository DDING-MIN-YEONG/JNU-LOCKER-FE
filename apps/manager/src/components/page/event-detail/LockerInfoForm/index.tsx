import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { EventDetailForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";

import EventDetailFloorInfoForm from "../FloorInfoForm";
import Spinner from "@/components/common/Spinner";

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
  onDeleteEvent: () => void;
  isDeleteEventLoading: boolean;
  isPutEventLoading: boolean;
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
  onDeleteEvent,
  isDeleteEventLoading,
  isPutEventLoading,
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
      <div className={cn("btnContainer")}>
        <Button
          className={cn("createEventBtn")}
          color="primary"
          onClick={isPutMode ? onPutEvent : onPutClick}
          disabled={isPutMode && isPutEventLoading}
        >
          <Txt size="h6" color="white">
            {isPutMode ? "수정완료" : "수정하기"}
          </Txt>
        </Button>
        <Button
          color="red"
          disabled={isDeleteEventLoading}
          className={cn("deleteBtn")}
          onClick={() => {
            if (confirm("이 이벤트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
              onDeleteEvent();
            }
          }}
        >
          <Txt color="white" size="h6">
            삭제
          </Txt>
        </Button>
      </div>
      {isDeleteEventLoading && <Spinner />}
      {isPutEventLoading && <Spinner />}
    </>
  );
}
