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
