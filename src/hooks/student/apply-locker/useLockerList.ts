import { useGetApplyLockerPageEventId } from "@/hooks/student/apply-locker/useGetApplyLockerPageEventId";
import { useGetLockerList } from "@/hooks/tanstack-query/student/apply-locker/useGetLockerList";
import { useLockerFloor } from "./useLockerFloor";

export const useLockerList = () => {
  const { eventId } = useGetApplyLockerPageEventId();

  const { data: lockerInfo } = useGetLockerList(eventId);

  const floorList = lockerInfo?.map((floor) => floor.floorNumber) || [];

  const { onSelectFloor, selectedFloor } = useLockerFloor(floorList);

  const selectedLockerList = lockerInfo?.find((floor) => floor.floorNumber === selectedFloor)?.lockerList || [];

  return {
    lockerInfo,
    floorList,
    selectedFloor,
    onSelectFloor,
    selectedLockerList,
  };
};
