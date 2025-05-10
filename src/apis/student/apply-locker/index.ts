import { Locker, LockerList, MyRegistrationLocker } from "@/apis/dtos/student/locker";
import { https } from "@/apis/instance/https";

export const getLockerList = async (eventId: string) => {
  const { data } = await https.get(`events/${eventId}/lockers`);

  const lockerList: LockerList[] = data.map(
    ({ floorId, floorNumber, lockers }: { floorId: number; floorNumber: number; lockers: Locker[] }) =>
      new LockerList({ floorId, floorNumber, lockers }),
  );

  return lockerList;
};

export const getMyRegistrationLocker = async (eventId: string) => {
  const { data } = await https.get(`events/${eventId}/registrations/me`);

  return new MyRegistrationLocker(data);
};

export interface ApplyLockerRequest {
  eventId: string;
  lockerId: number;
}

export const postApplyLocker = async ({ eventId, lockerId }: ApplyLockerRequest) => {
  await https.post(`events/${eventId}/registrations`, {
    lockerId,
  });
};

export const deleteMyRegistrationLocker = async (eventId: string) => {
  await https.delete(`events/${eventId}/registrations/me`);
};
