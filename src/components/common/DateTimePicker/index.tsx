import Txt from "@/components/design-system/Txt";
import { CreateEventForm } from "@/types/committee/event";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import "./DateTimePicker.css";

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

  return (
    <div className={cn("container")}>
      <Txt size="h3" color="black">
        {`${selectedYear} : ${selectedMonth} : ${selectedDay} / ${selectedHour} : ${selectedMinute}`}
      </Txt>
      <DatePicker selected={date} onChange={(date) => setData({ ...data, [type]: date })} showTimeSelect inline />
    </div>
  );
}
