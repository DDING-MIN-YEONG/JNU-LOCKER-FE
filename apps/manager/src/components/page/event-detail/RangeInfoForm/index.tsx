import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { EventDetailForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";

const cn = classNames.bind(styles);

interface EventDetailRangeInfoFormProps {
  floorId: number;
  prefixId: number | string;
  rangeData: EventDetailForm["floors"][number]["prefixes"][number]["ranges"][number];
  onChangeRange: (
    floorId: number,
    prefixId: number | string,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeleteRange: (floorId: number, prefixId: number | string, rangeId: number) => void;
  isPutMode: boolean;
}

export default function EventDetailRangeInfoForm({
  floorId,
  prefixId,
  rangeData,
  onChangeRange,
  onDeleteRange,
  isPutMode,
}: EventDetailRangeInfoFormProps) {
  return (
    <div className={cn("container")}>
      <TextInput
        label="시작 번호"
        value={rangeData.lockerStartNumber ?? 0}
        id={`startLockerNumber-${rangeData.rangeId}`}
        type="text"
        readOnly={!isPutMode}
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
        readOnly={!isPutMode}
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          if (!isNaN(numberValue)) {
            onChangeRange(floorId, prefixId, rangeData.rangeId, "end", numberValue);
          }
        }}
      />
      {isPutMode && (
        <Button
          className={cn("deleteRangeBtn")}
          color="red"
          onClick={() => onDeleteRange(floorId, prefixId, rangeData.rangeId)}
        >
          <Txt size="h6" color="white">
            삭제
          </Txt>
        </Button>
      )}
    </div>
  );
}
