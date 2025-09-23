import { EventDetailForm } from "@/types/event";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

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
      <LabeledInput
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
      <LabeledInput
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
