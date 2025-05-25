import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import Button from "@/components/design-system/Button";
import CreateEventPrefixInfoForm from "../PrefixInfoForm";

const cn = classNames.bind(styles);

interface CreateEventFloorInfoFormProps {
  floorData: CreateEventForm["floors"][number];
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
}

export default function CreateEventFloorInfoForm({
  floorData,
  onChangeFloorNumber,
  onAddPrefix,
  onChangePrefix,
  onAddRange,
  onChangeRange,
  onDeleteFloor,
  onDeletePrefix,
  onDeleteRange,
}: CreateEventFloorInfoFormProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("floorTitle")}>
        <Txt size="h5" weight="medium">
          층
        </Txt>
        <Button className={cn("deleteFloorBtn")} color="red" onClick={() => onDeleteFloor(floorData.floorId)}>
          <Txt size="h6" color="white">
            층 삭제
          </Txt>
        </Button>
      </div>
      <TextInput
        label="층수"
        value={floorData.floorNumber ?? 0}
        id={`floorNumber-${floorData.floorId}`}
        type="text"
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
          <Button className={cn("addPrefixBtn")} color="blue" onClick={() => onAddPrefix(floorData.floorId)}>
            <Txt size="h6" color="white">
              + 접두사 추가
            </Txt>
          </Button>
        </div>
        {floorData.prefixes.map((prefix) => (
          <CreateEventPrefixInfoForm
            floorId={floorData.floorId}
            key={prefix.prefixId}
            prefixData={prefix}
            onChangePrefix={onChangePrefix}
            onAddRange={onAddRange}
            onChangeRange={onChangeRange}
            onDeletePrefix={onDeletePrefix}
            onDeleteRange={onDeleteRange}
          />
        ))}
      </div>
    </div>
  );
}
