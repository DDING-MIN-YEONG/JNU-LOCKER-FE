export class Announcement {
  id: string;
  title: string;
  content: string;
  writer: string;
  createdAt: Date;

  constructor({
    id,
    title,
    content,
    writer,
    createdAt,
  }: {
    id: string;
    title: string;
    content: string;
    writer: string;
    createdAt: Date;
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = createdAt;
  }
}

export class AnnouncementList {
  content: Announcement[];
  totalElements: number;
  isLast: boolean;

  constructor({ content, totalElements, last }: { content: Announcement[]; totalElements: number; last: boolean }) {
    this.content = content;
    this.totalElements = totalElements;
    this.isLast = last;
  }
}

export class AnnouncementDetail {
  id: string;
  title: string;
  content: string;
  writer: string;
  createdAt: Date;
  updatedAt: Date;
  departments: {
    id: number;
    name: string;
  }[];

  constructor({
    id,
    title,
    content,
    writer,
    createdAt,
    updatedAt,
    departments,
  }: {
    id: string;
    title: string;
    content: string;
    writer: string;
    createdAt: Date;
    updatedAt: Date;
    departments: {
      id: number;
      name: string;
    }[];
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.departments = departments;
  }
}
