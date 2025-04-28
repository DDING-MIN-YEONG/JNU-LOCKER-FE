export interface CreateEventForm {
  title: string;
  startAt: Date | null;
  endAt: Date | null;
  participationDepartmentIds: number[];
  floors: {
    floorNumber: null | number;
    prefixes: [
      {
        lockerPrefix: string;
        ranges: {
          lockerStartNumber: null | number;
          lockerEndNumber: null | number;
        }[];
      },
    ];
  }[];
}
