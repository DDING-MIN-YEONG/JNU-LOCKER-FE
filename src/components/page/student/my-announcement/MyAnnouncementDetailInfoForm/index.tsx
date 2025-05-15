import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import { LabeledTextarea } from "@/components/common/LabeledTextarea";
import { MyAnnouncementDetailForm } from "@/types/student/announcement";
import { formatToKoreanTime } from "@/utils/date";
import { getEffectiveDate } from "@/functions/getEffectiveDate";

const cn = classNames.bind(styles);

interface AnnouncementDetailFormProps {
  formData: MyAnnouncementDetailForm;
}

export default function MyAnnouncementDetailInfoForm({ formData }: AnnouncementDetailFormProps) {
  const { date, isUpdate } = getEffectiveDate(formData.createdAt as Date, formData.updatedAt as Date);

  return (
    <div>
      <header className={cn("header")}>
        <Txt weight="medium">공지사항</Txt>
      </header>
      <div className={cn("contentContainer")}>
        <TextInput id="writer" label="작성자" type="text" value={formData.writer} readOnly />
        <TextInput id="title" label="제목" type="text" value={formData.title} readOnly />
        <LabeledTextarea
          id="content"
          label="내용"
          value={formData.content}
          textareaClassName={cn("textarea")}
          readOnly
        />
        <Txt size="small" className={cn("date")}>
          {`작성일 : ${formatToKoreanTime(date)} ${isUpdate ? "(수정됨)" : ""}`}
        </Txt>
      </div>
    </div>
  );
}
