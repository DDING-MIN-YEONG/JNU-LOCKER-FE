import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import CreateEventFloorInfoForm from "../FloorInfoForm";
import Button from "@/components/design-system/Button";
import Spinner from "@/components/common/Spinner";
import { useContext } from "react";
import { ApplyFormContext } from "@/stores/apply-locker";

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
