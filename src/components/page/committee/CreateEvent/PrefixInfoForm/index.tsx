import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import Button from "@/components/design-system/Button";
import CreateEventRangeInfoForm from "../RangeInfoForm";

const cn = classNames.bind(styles);

interface CreateEventPrefixInfoFormProps {
  floorId: number;
  prefixData: CreateEventForm["floors"][number]["prefixes"][number];
  onChangePrefix: (floorId: number, prefixId: number, lockerPrefix: string) => void;
  onAddRange: (floorId: number, prefixId: number) => void;
  onChangeRange: (
    floorId: number,
    prefixId: number,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeletePrefix: (floorId: number, prefixId: number) => void;
  onDeleteRange: (floorId: number, prefixId: number, rangeId: number) => void;
}

export default function CreateEventPrefixInfoForm({
  floorId,
  onChangePrefix,
  prefixData,
  onAddRange,
  onChangeRange,
  onDeletePrefix,
  onDeleteRange,
}: CreateEventPrefixInfoFormProps) {
  return (
    <div className={cn("container")}>
      <Button
        className={cn("deletePrefixBtn")}
        color="red"
        onClick={() => onDeletePrefix(floorId, prefixData.prefixId)}
      >
        <Txt size="h6" color="white">
          접두사 삭제
        </Txt>
      </Button>
      <TextInput
        label="접두사"
        value={prefixData.lockerPrefix}
        id="lockerPrefix"
        type="text"
        placeholder="접두사 입력 (예: A), 빈 값 가능"
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
          <Button className={cn("addRangeBtn")} color="blue" onClick={() => onAddRange(floorId, prefixData.prefixId)}>
            <Txt size="h6" color="white">
              + 범위 추가
            </Txt>
          </Button>
        </div>
        {prefixData.ranges.map((range) => (
          <CreateEventRangeInfoForm
            floorId={floorId}
            prefixId={prefixData.prefixId}
            rageData={range}
            key={range.rangeId}
            onChangeRange={onChangeRange}
            onDeleteRange={onDeleteRange}
          />
        ))}
      </div>
    </div>
  );
}
