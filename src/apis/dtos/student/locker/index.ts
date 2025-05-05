export class Locker {
  available: boolean;
  code: string;
  lockerId: number;

  constructor({ available, code, lockerId }: { available: boolean; code: string; lockerId: number }) {
    this.available = available;
    this.code = code;
    this.lockerId = lockerId;
  }
}

export class LockerList {
  floorId: number;
  floorNumber: number;
  lockerList: Locker[];

  constructor({ floorId, floorNumber, lockers }: { floorId: number; floorNumber: number; lockers: Locker[] }) {
    this.floorId = floorId;
    this.floorNumber = floorNumber;
    this.lockerList = lockers;
  }
}
