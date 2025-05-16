import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import { CreateEventForm } from "@/types/committee/event";
import DateTimePicker from "@/components/common/DateTimePicker";
import Button from "@/components/design-system/Button";
import { Selector } from "@/components/common/Selector";
import { MAX_TITLE_LENGTH } from "@/constants/committee/create-event";

const cn = classNames.bind(styles);

interface CreateEventInfoFormProps {
  formData: CreateEventForm;
  setFormData: (formData: CreateEventForm) => void;
  organizations: {
    id: number;
    value: string;
  }[];
  departments: {
    id: number;
    value: string;
  }[];
  onDeleteDepartment: (id: number) => void;
  onSelectDepartment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectOrganizations: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CreateEventInfoForm({
  formData,
  setFormData,
  organizations,
  departments,
  onDeleteDepartment,
  onSelectOrganizations,
  onSelectDepartment,
}: CreateEventInfoFormProps) {
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
          maxLength={MAX_TITLE_LENGTH}
          value={formData.title}
          containerClassName={cn("titleInputContainer")}
        >
          <Txt size="small" className={cn("textLength")}>
            {formData.title.length} / {MAX_TITLE_LENGTH}
          </Txt>
        </TextInput>
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
        <Txt size="h5" weight="medium">
          사물함 신청 참여 학과
        </Txt>
        <div className={cn("participationDepartmentSelectorContainer")}>
          <Selector
            label="소속"
            onChange={onSelectOrganizations}
            options={organizations}
            value={formData.affiliation.value}
            id="affiliation"
          />
          <Selector
            label="학과"
            onChange={onSelectDepartment}
            options={departments}
            value={departments[0].value}
            id="department"
          />
        </div>
        <div className={cn("selectDepartmentContainer")}>
          <Txt size="h5" weight="medium">
            선택한 참여 학과
          </Txt>
          <div className={cn("selectedDepartmentContainer")}>
            {formData.participationDepartmentIds.map((department) => (
              <div key={department.id} className={cn("selectedDepartment")}>
                <Txt size="small" weight="medium">
                  {department.value}
                </Txt>
                <Button
                  className={cn("deleteDepartmentBtn")}
                  color="red"
                  onClick={() => onDeleteDepartment(department.id)}
                >
                  <Txt size="small" color="white">
                    삭제
                  </Txt>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
