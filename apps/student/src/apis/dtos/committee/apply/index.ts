export class ApplyDetail {
  floorNumber: number;
  id: number;
  lockerCode: string;
  member: {
    department: string;
    email: string;
    name: string;
    organization: string;
    studentNumber: string;
  };

  constructor({
    floorNumber,
    id,
    lockerCode,
    member: { department, email, name, organization, studentNumber },
  }: {
    floorNumber: number;
    id: number;
    lockerCode: string;
    member: {
      department: string;
      email: string;
      name: string;
      organization: string;
      studentNumber: string;
    };
  }) {
    this.floorNumber = floorNumber;
    this.id = id;
    this.lockerCode = lockerCode;
    this.member = {
      department,
      email,
      name,
      organization,
      studentNumber,
    };
  }
}

export class ApplyDetailList {
  content: ApplyDetail[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: ApplyDetail[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}
