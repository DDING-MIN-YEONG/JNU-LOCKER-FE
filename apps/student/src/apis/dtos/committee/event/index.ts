export class Event {
  startAt: Date;
  endAt: Date;
  id: string;
  title: string;
  status: "READY" | "OPEN" | "CLOSED";
  publish: boolean;

  constructor({
    id,
    startAt,
    endAt,
    title,
    status,
    publish,
  }: {
    title: string;
    id: string;
    startAt: Date;
    endAt: Date;
    publish: boolean;
    status: "READY" | "OPEN" | "CLOSED";
  }) {
    this.endAt = endAt;
    this.startAt = startAt;
    this.id = id;
    this.status = status;
    this.publish = publish;
    this.title = title;
  }
}

export class EventList {
  content: Event[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: Event[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}

export class EventDetail {
  id: string;
  title: string;
  participationDepartmentIds: {
    id: number;
    value: string;
  }[];
  startAt: Date;
  endAt: Date;
  status: "READY" | "OPEN" | "CLOSED";
  publish: boolean;
  floors: {
    floorId: number;
    floorNumber: number;
    prefixes: {
      prefixId: string;
      lockerPrefix: string;
      ranges: {
        rangeId: number;
        lockerStartNumber: number;
        lockerEndNumber: number;
      }[];
    }[];
  }[];

  constructor({
    id,
    title,
    participationDepartments,
    startAt,
    endAt,
    status,
    publish,
    floors,
  }: {
    id: string;
    title: string;
    participationDepartments: {
      id: number;
      name: string;
    }[];
    startAt: Date;
    endAt: Date;
    status: "READY" | "OPEN" | "CLOSED";
    publish: boolean;
    floors: {
      floorNumber: number;
      prefixes: {
        lockerPrefix: string;
        ranges: {
          lockerStartNumber: number;
          lockerEndNumber: number;
        }[];
      }[];
    }[];
  }) {
    this.id = id;
    this.title = title;
    this.participationDepartmentIds = participationDepartments.map((department) => ({
      id: department.id,
      value: department.name,
    }));
    this.startAt = startAt;
    this.endAt = endAt;
    this.status = status;
    this.publish = publish;
    this.floors = floors.map((floor) => ({
      floorId: floor.floorNumber,
      floorNumber: floor.floorNumber,
      prefixes: floor.prefixes.map((prefix) => ({
        prefixId: prefix.lockerPrefix,
        lockerPrefix: prefix.lockerPrefix,
        ranges: prefix.ranges.map((range) => ({
          rangeId: range.lockerStartNumber,
          lockerStartNumber: range.lockerStartNumber,
          lockerEndNumber: range.lockerEndNumber,
        })),
      })),
    }));
  }
}
