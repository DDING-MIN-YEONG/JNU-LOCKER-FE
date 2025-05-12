import { CREATE_EVENT_VALIDATION } from "@/constants/validation/createEvent";
import { CreateEventForm } from "@/types/committee/event";

export const createEventValidator = (formData: CreateEventForm) => {
  if (!formData.title) {
    alert(CREATE_EVENT_VALIDATION.title.required);
    return false;
  }

  if (!formData.startAt) {
    alert(CREATE_EVENT_VALIDATION.startAt.required);
    return false;
  }

  if (!formData.endAt) {
    alert(CREATE_EVENT_VALIDATION.endAt.required);
    return false;
  }

  if (formData.participationDepartmentIds.length === 0) {
    alert(CREATE_EVENT_VALIDATION.department.required);
    return false;
  }

  const invalidFloorNumber = formData.floors.find((floor) => floor.floorNumber === null || floor.floorNumber < 1);

  if (invalidFloorNumber) {
    alert(CREATE_EVENT_VALIDATION.floor.min);
    return false;
  }

  const invalidLockerNumber = formData.floors.find((floor) =>
    floor.prefixes.some((prefix) =>
      prefix.ranges.some((range) => range.lockerStartNumber === null || range.lockerEndNumber === null),
    ),
  );

  if (invalidLockerNumber) {
    alert(CREATE_EVENT_VALIDATION.lockerNumber.required);
    return false;
  }

  return true;
};
