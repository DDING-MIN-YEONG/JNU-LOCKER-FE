"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import CreateEventInfoForm from "@/components/page/CreateEvent/InfoForm";
import { useCreateEventForm } from "@/hooks/event/useCreateEventForm";
import CreateEventLockerInfoForm from "@/components/page/CreateEvent/LockerInfoForm";
import { ApplyFormContext } from "@/stores/apply-locker";

const cn = classNames.bind(styles);

export default function CreateEvent() {
  const {
    formData,
    setFormData,
    onAddFloor,
    onChangeFloorNumber,
    onAddPrefix,
    onChangePrefix,
    onAddRange,
    onChangeRange,
    onDeleteFloor,
    onDeletePrefix,
    onDeleteRange,
    organizations,
    departments,
    onDeleteDepartment,
    onSelectDepartment,
    onSelectOrganizations,
    onCreateEvent,
    isCreateEventLoading,
  } = useCreateEventForm();

  return (
    <ApplyFormContext.Provider
      value={{
        formData,
        setFormData,
        onAddFloor,
        onChangeFloorNumber,
        onAddPrefix,
        onChangePrefix,
        onAddRange,
        onChangeRange,
        onDeleteFloor,
        onDeletePrefix,
        onDeleteRange,
        organizations,
        departments,
        onDeleteDepartment,
        onSelectDepartment,
        onSelectOrganizations,
        onCreateEvent,
        isCreateEventLoading,
      }}
    >
      <div className={cn("container")}>
        <Txt color="primary" size="h3" weight="medium">
          이벤트 생성
        </Txt>
        <CreateEventInfoForm />
        <Txt size="h4" weight="medium">
          사물함 정보
        </Txt>
        <CreateEventLockerInfoForm />
      </div>
    </ApplyFormContext.Provider>
  );
}
