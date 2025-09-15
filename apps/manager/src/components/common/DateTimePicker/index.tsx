import Txt from "@repo/ui/design-system/Txt/index";
import { CreateEventForm } from "@/types/event";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "./DateTimePicker.css";
import { useCallback } from "react";

const cn = classNames.bind(styles);

interface DateTimePickerProps {
  data: CreateEventForm;
  setData: (formData: CreateEventForm) => void;
  type: "startAt" | "endAt";
}

export default function DateTimePicker({ data, setData, type }: DateTimePickerProps) {
  const date = type === "startAt" ? data.startAt : data.endAt;

  const selectedYear = date ? date.getFullYear() : 0;
  const selectedMonth = date ? (date.getMonth() + 1).toString().padStart(2, "0") : "00";
  const selectedDay = date ? date.getDate().toString().padStart(2, "0") : "00";
  const selectedHour = date ? date.getHours().toString().padStart(2, "0") : "00";
  const selectedMinute = date ? date.getMinutes().toString().padStart(2, "0") : "00";

  const handleDateChange = useCallback(
    (newDate: Date | null) => {
      if (!newDate) return;

      if (type === "startAt" && data.endAt && newDate > data.endAt) {
        alert("시작 시간은 종료 시간보다 이전이어야 합니다.");
        return;
      }

      if (type === "endAt" && data.startAt && newDate < data.startAt) {
        alert("종료 시간은 시작 시간보다 이후여야 합니다.");
        return;
      }

      setData({ ...data, [type]: newDate });
    },
    [data, setData, type],
  );

  return (
    <div className={cn("container")}>
      <Txt size="h3" color="black">
        {`${selectedYear} : ${selectedMonth} : ${selectedDay} / ${selectedHour} : ${selectedMinute}`}
      </Txt>
      <DatePicker selected={date} onChange={handleDateChange} showTimeSelect inline />
    </div>
  );
}
