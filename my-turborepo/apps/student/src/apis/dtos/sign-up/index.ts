export class Organization {
  id: number;
  value: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.value = name;
  }
}

export class Department {
  id: number;
  value: string;

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.value = name;
  }
}
