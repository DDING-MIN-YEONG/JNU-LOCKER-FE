import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import Button from "@/components/design-system/Button";

const cn = classNames.bind(styles);

interface CreateEventRangeInfoFormProps {
  floorId: number;
  prefixId: number;
  rangeData: CreateEventForm["floors"][number]["prefixes"][number]["ranges"][number];
  onChangeRange: (
    floorId: number,
    prefixId: number,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeleteRange: (floorId: number, prefixId: number, rangeId: number) => void;
}

export default function CreateEventRangeInfoForm({
  floorId,
  prefixId,
  rangeData,
  onChangeRange,
  onDeleteRange,
}: CreateEventRangeInfoFormProps) {
  return (
    <div className={cn("container")}>
      <TextInput
        label="시작 번호"
        value={rangeData.lockerStartNumber ?? 0}
        id={`startLockerNumber-${rangeData.rangeId}`}
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          if (!isNaN(numberValue)) {
            onChangeRange(floorId, prefixId, rangeData.rangeId, "start", numberValue);
          }
        }}
      />
      <TextInput
        label="종료 번호"
        value={rangeData.lockerEndNumber ?? 0}
        id={`endLockerNumber-${rangeData.rangeId}`}
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          if (!isNaN(numberValue)) {
            onChangeRange(floorId, prefixId, rangeData.rangeId, "end", numberValue);
          }
        }}
      />
      <Button
        className={cn("deleteRangeBtn")}
        color="red"
        onClick={() => onDeleteRange(floorId, prefixId, rangeData.rangeId)}
      >
        <Txt size="h6" color="white">
          삭제
        </Txt>
      </Button>
    </div>
  );
}
