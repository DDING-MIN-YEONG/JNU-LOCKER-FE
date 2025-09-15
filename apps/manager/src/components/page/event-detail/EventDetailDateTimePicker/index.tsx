import Txt from "@repo/ui/design-system/Txt/index";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "./DateTimePicker.css";
import { useCallback } from "react";
import { EventDetailForm } from "@/types/committee/event";
import { getDate, getHours, getMinutes, getMonth, getYear } from "@/functions/date";

const cn = classNames.bind(styles);

interface EventDetailDateTimePickerProps {
  data: EventDetailForm;
  setData: (formData: EventDetailForm) => void;
  type: "startAt" | "endAt";
  isPutMode: boolean;
}

export default function EventDetailDateTimePicker({ data, setData, type, isPutMode }: EventDetailDateTimePickerProps) {
  const date = type === "startAt" ? data.startAt : data.endAt;

  const selectedYear = date ? getYear(date) : 0;
  const selectedMonth = date ? getMonth(date) : "00";
  const selectedDay = date ? getDate(date) : "00";
  const selectedHour = date ? getHours(date) : "00";
  const selectedMinute = date ? getMinutes(date) : "00";

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
      {isPutMode && (
        <DatePicker selected={date instanceof Date ? date : null} onChange={handleDateChange} showTimeSelect inline />
      )}
    </div>
  );
}
