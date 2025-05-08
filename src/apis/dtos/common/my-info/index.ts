export class MyInfo {
  memberId: number;
  name: string;
  studentNumber: string;
  affiliation: string;
  phoneNumber: string;
  email: string;

  constructor({
    memberId,
    name,
    studentNumber,
    affiliation,
    phoneNumber,
    email,
  }: {
    memberId: number;
    name: string;
    studentNumber: string;
    affiliation: string;
    phoneNumber: string;
    email: string;
  }) {
    this.memberId = memberId;
    this.name = name;
    this.studentNumber = studentNumber;
    this.affiliation = affiliation;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
