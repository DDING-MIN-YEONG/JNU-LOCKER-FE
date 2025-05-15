export class MyAnnouncement {
  id: number;
  title: string;
  writer: string;
  createdAt: Date;

  constructor({
    id,
    title,
    writer,
    createdAt,
  }: {
    id: number;
    title: string;
    content: string;
    writer: string;
    createdAt: Date;
  }) {
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.createdAt = createdAt;
  }
}

export class MyAnnouncementList {
  content: MyAnnouncement[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: MyAnnouncement[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}
