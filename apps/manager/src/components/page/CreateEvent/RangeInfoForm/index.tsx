import { CreateEventForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

import { ApplyFormContext } from "@/stores/apply-locker";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";
import { useContext } from "react";

const cn = classNames.bind(styles);

interface CreateEventRangeInfoFormProps {
  floorId: number;
  prefixId: number;
  rangeData: CreateEventForm["floors"][number]["prefixes"][number]["ranges"][number];
}

export default function CreateEventRangeInfoForm({ floorId, prefixId, rangeData }: CreateEventRangeInfoFormProps) {
  const { onChangeRange, onDeleteRange } = useContext(ApplyFormContext);

  return (
    <div className={cn("container")}>
      <LabeledInput
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
      <LabeledInput
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
