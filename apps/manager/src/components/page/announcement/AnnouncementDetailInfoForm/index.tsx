import { LabeledTextarea } from "@/components/common/LabeledTextarea";
import { Selector } from "@/components/common/Selector";
import { AnnouncementDetailForm } from "@/types/announcement";
import { formatToKoreanTime } from "@/utils/date";
import Spinner from "@repo/ui/common/Spinner/index";
import TextInput from "@repo/ui/common/TextInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

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
  date: Date;
  isUpdate: boolean;
  onDeleteAnnouncement: () => void;
  isDeleteAnnouncementLoading: boolean;
  isPutAnnouncementLoading: boolean;
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
  date,
  isUpdate,
  onDeleteAnnouncement,
  isDeleteAnnouncementLoading,
  isPutAnnouncementLoading,
}: AnnouncementDetailFormProps) {
  return (
    <>
      <div>
        <header className={cn("header")}>
          <Txt weight="medium">공지사항</Txt>
          <Txt size="small" className={cn("date")}>
            {`작성일 : ${formatToKoreanTime(date)} ${isUpdate ? "(수정됨)" : ""}`}
          </Txt>
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
          <div className={cn("buttonContainer")}>
            {isPutMode ? (
              <Button
                className={cn("announcementBtn")}
                color="primary"
                onClick={onPutAnnouncement}
                disabled={isPutAnnouncementLoading}
              >
                <Txt size="h6" color="white">
                  수정완료
                </Txt>
              </Button>
            ) : (
              <Button className={cn("announcementBtn")} color="primary" onClick={onClickEditButton}>
                <Txt size="h6" color="white">
                  수정하기
                </Txt>
              </Button>
            )}
            <Button
              className={cn("announcementBtn")}
              color="red"
              onClick={onDeleteAnnouncement}
              disabled={isDeleteAnnouncementLoading}
            >
              <Txt size="h6" color="white">
                삭제하기
              </Txt>
            </Button>
          </div>
        </div>
      </div>
      {isDeleteAnnouncementLoading && <Spinner />}
      {isPutAnnouncementLoading && <Spinner />}
    </>
  );
}
