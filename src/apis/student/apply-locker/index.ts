import { Locker, LockerList, MyRegistrationLocker } from "@/apis/dtos/student/locker";
import { https } from "@/apis/https";

export const getLockerList = async (eventId: number) => {
  const { data } = await https.get(`events/${eventId}/lockers`);

  const lockerList: LockerList[] = data.map(
    ({ floorId, floorNumber, lockers }: { floorId: number; floorNumber: number; lockers: Locker[] }) =>
      new LockerList({ floorId, floorNumber, lockers }),
  );

  return lockerList;
};

export const getMyRegistrationLocker = async (eventId: number) => {
  const { data } = await https.get(`events/${eventId}/registrations/me`);

  return new MyRegistrationLocker(data);
};
