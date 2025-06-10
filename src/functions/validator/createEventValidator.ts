import { CREATE_EVENT_VALIDATION } from "@/constants/validation/createEvent";
import { CreateEventForm } from "@/types/committee/event";

export const createEventValidator = (formData: CreateEventForm) => {
  if (!formData.title) {
    return CREATE_EVENT_VALIDATION.title.required;
  }

  if (!formData.startAt) {
    return CREATE_EVENT_VALIDATION.startAt.required;
  }

  if (!formData.endAt) {
    return CREATE_EVENT_VALIDATION.endAt.required;
  }

  if (formData.participationDepartmentIds.length === 0) {
    return CREATE_EVENT_VALIDATION.department.required;
  }

  const invalidFloorNumber = formData.floors.find((floor) => floor.floorNumber === null || floor.floorNumber < 1);

  if (invalidFloorNumber) {
    return CREATE_EVENT_VALIDATION.floor.min;
  }

  const invalidLockerNumber = formData.floors.find((floor) =>
    floor.prefixes.some((prefix) =>
      prefix.ranges.some((range) => range.lockerStartNumber === null || range.lockerEndNumber === null),
    ),
  );

  if (invalidLockerNumber) {
    return CREATE_EVENT_VALIDATION.lockerNumber.required;
  }

  const invalidLockerRange = formData.floors.find((floor) =>
    floor.prefixes.some((prefix) =>
      prefix.ranges.some((range) => {
        const start = Number(range.lockerStartNumber);
        const end = Number(range.lockerEndNumber);

        return start > end;
      }),
    ),
  );

  if (invalidLockerRange) {
    return CREATE_EVENT_VALIDATION.lockerNumber.range;
  }

  const invalidLockerCount = formData.floors.find((floor) =>
    floor.prefixes.some((prefix) =>
      prefix.ranges.some((range) => {
        const start = Number(range.lockerStartNumber);
        const end = Number(range.lockerEndNumber);
        const maxLockerNumber = 2000;

        const count = end - start + 1;
        return count > maxLockerNumber;
      }),
    ),
  );

  if (invalidLockerCount) {
    return CREATE_EVENT_VALIDATION.lockerNumber.max;
  }

  return null;
};
