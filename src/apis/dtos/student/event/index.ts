export class MyEvent {
  id: string;
  title: string;
  departmentNickname: string;
  startAt: Date;
  endAt: Date;
  availableLockerCount: number;

  constructor({
    id,
    title,
    departmentNickname,
    startAt,
    endAt,
    availableLockerCount,
  }: {
    id: string;
    title: string;
    departmentNickname: string;
    startAt: Date;
    endAt: Date;
    availableLockerCount: number;
  }) {
    this.id = id;
    this.title = title;
    this.departmentNickname = departmentNickname;
    this.startAt = startAt;
    this.endAt = endAt;
    this.availableLockerCount = availableLockerCount;
  }
}

export class MyEventList {
  content: MyEvent[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: MyEvent[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}
