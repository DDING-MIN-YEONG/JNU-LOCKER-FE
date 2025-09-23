import { EventDetailForm } from "@/types/event";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

import { Selector } from "@/components/common/Selector";
import EventDetailDateTimePicker from "@/components/page/event-detail/EventDetailDateTimePicker";
import { MAX_EVENT_TITLE_LENGTH } from "@/constants/create-event";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";

const cn = classNames.bind(styles);

interface EventDetailInfoFormProps {
  formData: EventDetailForm;
  setFormData: (formData: EventDetailForm) => void;
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
  isPutMode: boolean;
}

export default function EventDetailInfoForm({
  formData,
  setFormData,
  organizations,
  departments,
  onDeleteDepartment,
  onSelectOrganizations,
  onSelectDepartment,
  isPutMode,
}: EventDetailInfoFormProps) {
  return (
    <div>
      <header className={cn("header")}>
        <Txt weight="medium">기본 정보</Txt>
      </header>
      <div className={cn("contentContainer")}>
        <LabeledInput
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          label="제목"
          type="text"
          placeholder="이벤트 제목을 입력해주세요."
          maxLength={MAX_EVENT_TITLE_LENGTH}
          value={formData.title}
          labeledInputContainerClassName={cn("titleInputContainer")}
          readOnly={!isPutMode}
        >
          <Txt size="small" className={cn("textLength")}>
            {formData.title.length} / {MAX_EVENT_TITLE_LENGTH}
          </Txt>
        </LabeledInput>
        <div className={cn("eventTimeContainer")}>
          <div className={cn("eventTimeBox")}>
            <Txt size="small" weight="medium">
              생성 시작 시간
            </Txt>
            <EventDetailDateTimePicker data={formData} type="startAt" setData={setFormData} isPutMode={isPutMode} />
          </div>
          <div className={cn("eventTimeBox")}>
            <Txt size="small" weight="medium">
              생성 마감 시간
            </Txt>
            <EventDetailDateTimePicker data={formData} type="endAt" setData={setFormData} isPutMode={isPutMode} />
          </div>
        </div>
        {isPutMode && (
          <>
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
          </>
        )}
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
                {isPutMode && (
                  <Button
                    className={cn("deleteDepartmentBtn")}
                    color="red"
                    onClick={() => onDeleteDepartment(department.id)}
                  >
                    <Txt size="small" color="white">
                      삭제
                    </Txt>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
