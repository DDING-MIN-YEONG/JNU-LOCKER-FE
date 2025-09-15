import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import CreateEventFloorInfoForm from "../FloorInfoForm";
import styles from "./index.module.scss";

import { ApplyFormContext } from "@/stores/apply-locker";
import Spinner from "@repo/ui/common/Spinner/index";
import { useContext } from "react";

const cn = classNames.bind(styles);

export default function CreateEventLockerInfoForm() {
  const { formData, onAddFloor, onCreateEvent, isCreateEventLoading } = useContext(ApplyFormContext);

  return (
    <>
      <div>
        <header className={cn("header")}>
          <Txt weight="medium">층수 정보</Txt>
        </header>
        <div className={cn("floorContainer")}>
          {formData.floors.map((floor) => (
            <CreateEventFloorInfoForm floorData={floor} key={floor.floorId} />
          ))}
        </div>
      </div>
      <Button className={cn("addFloorBtn")} color="blue" onClick={onAddFloor}>
        <Txt size="h6" color="white">
          + 층 추가
        </Txt>
      </Button>
      <Button disabled={isCreateEventLoading} className={cn("createEventBtn")} color="primary" onClick={onCreateEvent}>
        <Txt size="h6" color="white">
          이벤트 생성
        </Txt>
      </Button>
      {isCreateEventLoading && <Spinner />}
    </>
  );
}
