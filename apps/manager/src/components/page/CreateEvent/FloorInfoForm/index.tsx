import { CreateEventForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

import { ApplyFormContext } from "@/stores/apply-locker";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";
import { useContext } from "react";
import CreateEventPrefixInfoForm from "../PrefixInfoForm";

const cn = classNames.bind(styles);

interface CreateEventFloorInfoFormProps {
  floorData: CreateEventForm["floors"][number];
}

export default function CreateEventFloorInfoForm({ floorData }: CreateEventFloorInfoFormProps) {
  const { onChangeFloorNumber, onAddPrefix, onDeleteFloor } = useContext(ApplyFormContext);

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
      <LabeledInput
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
          <CreateEventPrefixInfoForm floorId={floorData.floorId} key={prefix.prefixId} prefixData={prefix} />
        ))}
      </div>
    </div>
  );
}
