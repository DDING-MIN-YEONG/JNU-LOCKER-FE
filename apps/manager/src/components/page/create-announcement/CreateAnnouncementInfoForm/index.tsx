import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@repo/ui/design-system/Button/index";

import { Selector } from "@/components/common/Selector";
import { LabeledTextarea } from "@/components/common/LabeledTextarea";
import { CreateAnnouncementForm } from "@/types/committee/announcement";
import {
  MAX_ANNOUNCEMENT_CONTENT_LENGTH,
  MAX_ANNOUNCEMENT_TITLE_LENGTH,
} from "@/constants/committee/create-announcement";
import Spinner from "@/components/common/Spinner";

const cn = classNames.bind(styles);

interface CreateAnnouncementInfoFormProps {
  formData: CreateAnnouncementForm;
  setFormData: (formData: CreateAnnouncementForm) => void;
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
  onCreateAnnouncement: () => void;
  isCreateAnnouncementLoading: boolean;
}

export default function CreateAnnouncementInfoForm({
  formData,
  setFormData,
  organizations,
  departments,
  onDeleteDepartment,
  onSelectOrganizations,
  onSelectDepartment,
  onCreateAnnouncement,
  isCreateAnnouncementLoading,
}: CreateAnnouncementInfoFormProps) {
  return (
    <div>
      <header className={cn("header")}>
        <Txt weight="medium">공지사항 입력</Txt>
      </header>
      <div className={cn("contentContainer")}>
        <TextInput
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          label="제목"
          type="text"
          value={formData.title}
          placeholder="공지사항 제목을 입력해주세요."
          maxLength={MAX_ANNOUNCEMENT_TITLE_LENGTH}
          containerClassName={cn("titleInputContainer")}
        >
          <Txt size="small" className={cn("textLength")}>
            {formData.title.length} / {MAX_ANNOUNCEMENT_TITLE_LENGTH}
          </Txt>
        </TextInput>
        <div className={cn("contentInputContainer")}>
          <LabeledTextarea
            id="content"
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            label="내용"
            value={formData.content}
            placeholder="공지사항 내용을 입력해주세요."
            maxLength={MAX_ANNOUNCEMENT_CONTENT_LENGTH}
            labeledTextareaContainerClassName={cn("textarea")}
          />
          <Txt size="small" className={cn("textLength")}>
            {formData.content.length} / {MAX_ANNOUNCEMENT_CONTENT_LENGTH}
          </Txt>
        </div>
        <Txt size="h5" weight="medium">
          공지사항 참여 학과
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
        <Button
          disabled={isCreateAnnouncementLoading}
          type="submit"
          className={cn("createAnnouncementBtn")}
          color="primary"
          onClick={onCreateAnnouncement}
        >
          <Txt size="h6" color="white">
            공지사항 생성
          </Txt>
        </Button>
      </div>
      {isCreateAnnouncementLoading && <Spinner />}
    </div>
  );
}
