export class ApproveWait {
  memberId: number;
  studentNumber: string;
  name: string;
  createdAt: Date;
  email: string;

  constructor({
    createdAt,
    email,
    memberId,
    name,
    studentNumber,
  }: {
    memberId: number;
    studentNumber: string;
    name: string;
    createdAt: Date;
    email: string;
  }) {
    this.memberId = memberId;
    this.studentNumber = studentNumber;
    this.name = name;
    this.createdAt = createdAt;
    this.email = email;
  }
}

export class ApproveWaitList {
  content: ApproveWait[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: ApproveWait[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}
