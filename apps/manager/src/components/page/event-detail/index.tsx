"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";
import { useEventDetailForm } from "@/hooks/event/useEventDetailForm";
import EventDetailInfoForm from "@/components/page/event-detail/InfoForm";
import EventDetailLockerInfoForm from "@/components/page/event-detail/LockerInfoForm";

const cn = classNames.bind(styles);

export default function EventDetail() {
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
    onPutEvent,
    isPutMode,
    onPutClick,
    onDeleteEvent,
    isDeleteEventLoading,
    isPutEventLoading,
  } = useEventDetailForm();

  return (
    <div className={cn("container")}>
      <Txt color="primary" size="h3" weight="medium">
        이벤트
      </Txt>
      <EventDetailInfoForm
        formData={formData}
        setFormData={setFormData}
        organizations={organizations}
        departments={departments}
        onDeleteDepartment={onDeleteDepartment}
        onSelectDepartment={onSelectDepartment}
        onSelectOrganizations={onSelectOrganizations}
        isPutMode={isPutMode}
      />
      <Txt size="h4" weight="medium">
        사물함 정보
      </Txt>
      <EventDetailLockerInfoForm
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
        onPutEvent={onPutEvent}
        isPutMode={isPutMode}
        onPutClick={onPutClick}
        onDeleteEvent={onDeleteEvent}
        isDeleteEventLoading={isDeleteEventLoading}
        isPutEventLoading={isPutEventLoading}
      />
    </div>
  );
}
