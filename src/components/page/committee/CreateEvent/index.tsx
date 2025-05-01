"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import CreateEventInfoForm from "@/components/page/committee/CreateEvent/InfoForm";
import { useCreateEventForm } from "@/hooks/committee/event/useCreateEventForm";
import CreateEventLockerInfoForm from "@/components/page/committee/CreateEvent/LockerInfoForm";

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
  } = useCreateEventForm();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        이벤트 생성
      </Txt>
      <CreateEventInfoForm
        formData={formData}
        setFormData={setFormData}
        organizations={organizations}
        departments={departments}
        onDeleteDepartment={onDeleteDepartment}
        onSelectDepartment={onSelectDepartment}
        onSelectOrganizations={onSelectOrganizations}
      />
      <Txt size="h4" weight="medium">
        사물함 정보
      </Txt>
      <CreateEventLockerInfoForm
        formData={formData}
        onAddFloor={onAddFloor}
        onChangeFloorNumber={onChangeFloorNumber}
        onAddPrefix={onAddPrefix}
        onChangePrefix={onChangePrefix}
        onAddRange={onAddRange}
        onChangeRange={onChangeRange}
        onDeleteFloor={onDeleteFloor}
        onDeletePrefix={onDeletePrefix}
        onDeleteRange={onDeleteRange}
        onCreateEvent={onCreateEvent}
      />
    </div>
  );
}
