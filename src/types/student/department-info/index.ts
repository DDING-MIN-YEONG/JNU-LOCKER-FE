export interface MyEventType {
  id: string;
  title: string;
  departmentNickname: string;
  startAt: Date;
  endAt: Date;
  availableLockerCount: number;
}

export class MyEventList {
  content: MyEventType[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: MyEventType[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}

export interface MyAnnouncementType {
  id: string;
  title: string;
  writer: string;
  createdAt: Date;
}

export class MyAnnouncementList {
  content: MyAnnouncementType[];
  totalElements: number;
  isLast: boolean;

  constructor({
    content,
    totalElements,
    last,
  }: {
    content: MyAnnouncementType[];
    totalElements: number;
    last: boolean;
  }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}
