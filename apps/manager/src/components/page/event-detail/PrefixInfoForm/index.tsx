import { EventDetailForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

import { LabeledInput } from "@repo/ui/common/LabeledInput/index";
import EventDetailRangeInfoForm from "../RangeInfoForm";

const cn = classNames.bind(styles);

interface EventDetailPrefixInfoFormProps {
  floorId: number;
  prefixData: EventDetailForm["floors"][number]["prefixes"][number];
  onChangePrefix: (floorId: number, prefixId: number | string, lockerPrefix: string) => void;
  onAddRange: (floorId: number, prefixId: number | string) => void;
  onChangeRange: (
    floorId: number,
    prefixId: number | string,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeletePrefix: (floorId: number, prefixId: number | string) => void;
  onDeleteRange: (floorId: number, prefixId: number | string, rangeId: number) => void;
  isPutMode: boolean;
}

export default function EventDetailPrefixInfoForm({
  floorId,
  onChangePrefix,
  prefixData,
  onAddRange,
  onChangeRange,
  onDeletePrefix,
  onDeleteRange,
  isPutMode,
}: EventDetailPrefixInfoFormProps) {
  return (
    <div className={cn("container")}>
      {isPutMode && (
        <Button
          className={cn("deletePrefixBtn")}
          color="red"
          onClick={() => onDeletePrefix(floorId, prefixData.prefixId)}
        >
          <Txt size="h6" color="white">
            접두사 삭제
          </Txt>
        </Button>
      )}
      <LabeledInput
        label="접두사"
        value={prefixData.lockerPrefix}
        id={`lockerPrefix-${prefixData.prefixId}`}
        type="text"
        placeholder="접두사 입력 (예: A), 빈 값 가능"
        readOnly={!isPutMode}
        onChange={(e) => {
          const value = e.target.value;
          onChangePrefix(floorId, prefixData.prefixId, value);
        }}
      />
      <div className={cn("rangeContainer")}>
        <div className={cn("rangeTitle")}>
          <Txt size="small" weight="medium">
            번호 범위 추가
          </Txt>
          {isPutMode && (
            <Button className={cn("addRangeBtn")} color="blue" onClick={() => onAddRange(floorId, prefixData.prefixId)}>
              <Txt size="h6" color="white">
                + 범위 추가
              </Txt>
            </Button>
          )}
        </div>
        {prefixData.ranges.map((range) => (
          <EventDetailRangeInfoForm
            floorId={floorId}
            prefixId={prefixData.prefixId}
            rangeData={range}
            key={range.rangeId}
            onChangeRange={onChangeRange}
            onDeleteRange={onDeleteRange}
            isPutMode={isPutMode}
          />
        ))}
      </div>
    </div>
  );
}
