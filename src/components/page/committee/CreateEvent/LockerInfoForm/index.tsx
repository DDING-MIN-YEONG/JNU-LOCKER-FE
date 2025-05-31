import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import CreateEventFloorInfoForm from "../FloorInfoForm";
import Button from "@/components/design-system/Button";
import Spinner from "@/components/common/Spinner";

const cn = classNames.bind(styles);

interface CreateEventLockerInfoFormProps {
  formData: CreateEventForm;
  onAddFloor: () => void;
  onChangeFloorNumber: (floorId: number, floorNumber: number) => void;
  onAddPrefix: (floorId: number) => void;
  onChangePrefix: (floorId: number, prefixId: number, lockerPrefix: string) => void;
  onAddRange: (floorId: number, prefixId: number) => void;
  onChangeRange: (
    floorId: number,
    prefixId: number,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeleteFloor: (floorId: number) => void;
  onDeletePrefix: (floorId: number, prefixId: number) => void;
  onDeleteRange: (floorId: number, prefixId: number, rangeId: number) => void;
  onCreateEvent: () => void;
  isCreateEventLoading: boolean;
}

export default function CreateEventLockerInfoForm({
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
  onCreateEvent,
  isCreateEventLoading,
}: CreateEventLockerInfoFormProps) {
  return (
    <>
      <div>
        <header className={cn("header")}>
          <Txt weight="medium">층수 정보</Txt>
        </header>
        <div className={cn("floorContainer")}>
          {formData.floors.map((floor) => (
            <CreateEventFloorInfoForm
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
            />
          ))}
        </div>
      </div>
      <Button className={cn("addFloorBtn")} color="blue" onClick={onAddFloor}>
        <Txt size="h6" color="white">
          + 층 추가
        </Txt>
      </Button>
      <Button disabled={isCreateEventLoading} className={cn("createEventBtn")} color="primary" onClick={onCreateEvent}>
        <Txt size="h6" color="white">
          이벤트 생성
        </Txt>
      </Button>
      {isCreateEventLoading && <Spinner />}
    </>
  );
}
