import Txt from "@/components/design-system/Txt";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/design-system/Button";
import { Selector } from "@/components/common/Selector";
import { LabeledTextarea } from "@/components/common/LabeledTextarea";
import { AnnouncementDetailForm } from "@/types/committee/announcement";

const cn = classNames.bind(styles);

interface AnnouncementDetailFormProps {
  formData: AnnouncementDetailForm;
  setFormData: (formData: AnnouncementDetailForm) => void;
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
  onPutAnnouncement: () => void;
  isPutMode: boolean;
  onClickEditButton: () => void;
}

export default function AnnouncementDetailInfoForm({
  formData,
  setFormData,
  organizations,
  departments,
  onDeleteDepartment,
  onSelectOrganizations,
  onSelectDepartment,
  onPutAnnouncement,
  isPutMode,
  onClickEditButton,
}: AnnouncementDetailFormProps) {
  return (
    <div>
      <header className={cn("header")}>
        <Txt weight="medium">공지사항</Txt>
      </header>
      <div className={cn("contentContainer")}>
        <TextInput
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          label="제목"
          type="text"
          value={formData.title}
          placeholder="공지사항 제목을 입력해주세요."
          readOnly={!isPutMode}
        />
        <LabeledTextarea
          id="content"
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          label="내용"
          value={formData.content}
          placeholder="공지사항 내용을 입력해주세요."
          labeledTextareaContainerClassName={cn("textarea")}
          readOnly={!isPutMode}
        />
        <Txt size="h5" weight="medium">
          공지사항 참여 학과
        </Txt>
        {isPutMode && (
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
        )}
        <div className={cn("selectDepartmentContainer")}>
          {isPutMode && (
            <Txt size="h5" weight="medium">
              선택한 참여 학과
            </Txt>
          )}
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
        {isPutMode ? (
          <Button type="submit" className={cn("announcementBtn")} color="primary" onClick={onPutAnnouncement}>
            <Txt size="h6" color="white">
              수정 완료
            </Txt>
          </Button>
        ) : (
          <Button type="submit" className={cn("announcementBtn")} color="primary" onClick={onClickEditButton}>
            <Txt size="h6" color="white">
              수정하기
            </Txt>
          </Button>
        )}
      </div>
    </div>
  );
}
