export interface CreateEventForm {
  title: string;
  startAt: Date | null;
  endAt: Date | null;
  affiliation: {
    id: number;
    value: string;
  };
  participationDepartmentIds: {
    id: number;
    value: string;
  }[];
  floors: {
    floorNumber: null | number;
    floorId: number;
    prefixes: {
      prefixId: number;
      lockerPrefix: string;
      ranges: {
        rangeId: number;
        lockerStartNumber: null | number;
        lockerEndNumber: null | number;
      }[];
    }[];
  }[];
}

export interface CreateEventRequest {
  title: string;
  startAt: Date;
  endAt: Date;
  participationDepartmentIds: number[];
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
}
