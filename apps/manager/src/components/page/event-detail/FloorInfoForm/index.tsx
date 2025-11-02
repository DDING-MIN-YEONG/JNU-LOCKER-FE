import { EventDetailForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

import EventDetailPrefixInfoForm from "@/components/page/event-detail/PrefixInfoForm/index";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";

const cn = classNames.bind(styles);

interface EventDetailFloorInfoFormProps {
  floorData: EventDetailForm["floors"][number];
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
  isPutMode: boolean;
}

export default function EventDetailFloorInfoForm({
  floorData,
  onChangeFloorNumber,
  onAddPrefix,
  onChangePrefix,
  onAddRange,
  onChangeRange,
  onDeleteFloor,
  onDeletePrefix,
  onDeleteRange,
  isPutMode,
}: EventDetailFloorInfoFormProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("floorTitle")}>
        <Txt size="h5" weight="medium">
          층
        </Txt>
        {isPutMode && (
          <Button className={cn("deleteFloorBtn")} color="red" onClick={() => onDeleteFloor(floorData.floorId)}>
            <Txt size="h6" color="white">
              층 삭제
            </Txt>
          </Button>
        )}
      </div>
      <LabeledInput
        label="층수"
        value={floorData.floorNumber ?? 0}
        id={`floorNumber-${floorData.floorId}`}
        type="text"
        readOnly={!isPutMode}
        placeholder="숫자로 입력해주세요. (예: 2)"
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          if (!isNaN(numberValue)) {
            onChangeFloorNumber(floorData.floorId, numberValue);
          }
        }}
      />
      <div className={cn("prefixContainer")}>
        <div className={cn("prefixTitle")}>
          <Txt size="h5" weight="medium">
            접두사
          </Txt>
          {isPutMode && (
            <Button className={cn("addPrefixBtn")} color="blue" onClick={() => onAddPrefix(floorData.floorId)}>
              <Txt size="h6" color="white">
                + 접두사 추가
              </Txt>
            </Button>
          )}
        </div>
        {floorData.prefixes.map((prefix) => (
          <EventDetailPrefixInfoForm
            floorId={floorData.floorId}
            key={prefix.prefixId}
            prefixData={prefix}
            onChangePrefix={onChangePrefix}
            onAddRange={onAddRange}
            onChangeRange={onChangeRange}
            onDeletePrefix={onDeletePrefix}
            onDeleteRange={onDeleteRange}
            isPutMode={isPutMode}
          />
        ))}
      </div>
    </div>
  );
}
