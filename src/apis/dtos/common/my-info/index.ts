export class MyInfo {
  memberId: number;
  name: string;
  studentNumber: string;
  affiliation: string;
  phoneNumber: string;
  email: string;
  role: "MANAGER" | "ADMIN" | "USER" | "GUEST";

  constructor({
    memberId,
    name,
    studentNumber,
    affiliation,
    phoneNumber,
    email,
    role,
  }: {
    memberId: number;
    name: string;
    studentNumber: string;
    affiliation: string;
    phoneNumber: string;
    email: string;
    role: "MANAGER" | "ADMIN" | "USER" | "GUEST";
  }) {
    this.memberId = memberId;
    this.name = name;
    this.studentNumber = studentNumber;
    this.affiliation = affiliation;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.role = role;
  }
}

export class LoginInfo {
  accessToken: string;
  refreshToken: string;

  constructor({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
