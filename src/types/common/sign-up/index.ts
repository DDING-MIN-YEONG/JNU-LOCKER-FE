export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  departmentId: number;
  phoneNumber: string;
  studentNumber: string;
}

export interface SubmitEmailData {
  email: string;
}

export interface SubmitCertificationCodeData {
  email: string;
  code: string;
}
