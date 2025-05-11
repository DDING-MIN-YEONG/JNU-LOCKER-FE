import { convertToKST } from "@/functions/date";
import { CreateEventForm } from "@/types/committee/event";

export const convertCreateEventForm = (formData: CreateEventForm) => {
  const startAtKST = convertToKST(formData.startAt as Date);
  const endAtKST = convertToKST(formData.endAt as Date);

  const eventData = {
    title: formData.title,
    startAt: startAtKST,
    endAt: endAtKST,
    participationDepartmentIds: formData.participationDepartmentIds.map((department) => department.id),
    floors: formData.floors.map((floor) => ({
      floorNumber: floor.floorNumber as number,
      prefixes: floor.prefixes.map((prefix) => ({
        lockerPrefix: prefix.lockerPrefix,
        ranges: prefix.ranges.map((range) => ({
          lockerStartNumber: range.lockerStartNumber as number,
          lockerEndNumber: range.lockerEndNumber as number,
        })),
      })),
    })),
  };

  return { eventData };
};
