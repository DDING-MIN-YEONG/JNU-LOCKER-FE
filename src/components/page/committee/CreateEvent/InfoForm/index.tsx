import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import DateTimePicker from "@/components/common/DateTimePicker";

const cn = classNames.bind(styles);

interface CreateEventInfoFormProps {
  formData: CreateEventForm;
  setFormData: (formData: CreateEventForm) => void;
}

export default function CreateEventInfoForm({ formData, setFormData }: CreateEventInfoFormProps) {
  return (
    <div>
      <header className={cn("header")}>
        <Txt weight="medium">기본 정보</Txt>
      </header>
      <div className={cn("contentContainer")}>
        <TextInput
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          label="제목"
          type="text"
          placeholder="이벤트 제목을 입력해주세요."
        />
        <div className={cn("eventTimeContainer")}>
          <div className={cn("eventTimeBox")}>
            <Txt size="small" weight="medium">
              생성 시작 시간
            </Txt>
            <DateTimePicker data={formData} type="startAt" setData={setFormData} />
          </div>
          <div className={cn("eventTimeBox")}>
            <Txt size="small" weight="medium">
              생성 마감 시간
            </Txt>
            <DateTimePicker data={formData} type="endAt" setData={setFormData} />
          </div>
        </div>
      </div>
    </div>
  );
}
