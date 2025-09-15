import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";

import CreateEventRangeInfoForm from "../RangeInfoForm";
import { useContext } from "react";
import { ApplyFormContext } from "@/stores/apply-locker";

const cn = classNames.bind(styles);

interface CreateEventPrefixInfoFormProps {
  floorId: number;
  prefixData: CreateEventForm["floors"][number]["prefixes"][number];
}

export default function CreateEventPrefixInfoForm({ floorId, prefixData }: CreateEventPrefixInfoFormProps) {
  const { onChangePrefix, onAddRange, onDeletePrefix } = useContext(ApplyFormContext);
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
        id={`lockerPrefix-${prefixData.prefixId}`}
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
            rangeData={range}
            key={range.rangeId}
          />
        ))}
      </div>
    </div>
  );
}
