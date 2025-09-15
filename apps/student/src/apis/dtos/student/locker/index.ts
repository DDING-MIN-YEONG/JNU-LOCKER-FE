export class Locker {
  available: boolean;
  code: string;
  lockerId: string;

  constructor({ available, code, lockerId }: { available: boolean; code: string; lockerId: string }) {
    this.available = available;
    this.code = code;
    this.lockerId = lockerId;
  }
}

export class LockerList {
  floorId: string;
  floorNumber: number;
  lockerList: Locker[];

  constructor({ floorId, floorNumber, lockers }: { floorId: string; floorNumber: number; lockers: Locker[] }) {
    this.floorId = floorId;
    this.floorNumber = floorNumber;
    this.lockerList = lockers;
  }
}

export class MyRegistrationLocker {
  lockerId: number;
  lockerName: string;
  floorNumber: number;

  constructor({ id, lockerCode, floorNumber }: { id: number; lockerCode: string; floorNumber: number }) {
    this.lockerId = id;
    this.lockerName = lockerCode;
    this.floorNumber = floorNumber;
  }
}

export class LockerInfo {
  id: string;
  title: string;
  startAt: Date;
  endAt: Date;
  status: "READY" | "OPEN" | "CLOSED";

  constructor({
    id,
    title,
    startAt,
    endAt,
    status,
  }: {
    id: string;
    title: string;
    startAt: Date;
    endAt: Date;
    status: "READY" | "OPEN" | "CLOSED";
  }) {
    this.id = id;
    this.title = title;
    this.startAt = startAt;
    this.endAt = endAt;
    this.status = status;
  }
}
