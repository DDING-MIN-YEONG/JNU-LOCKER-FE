export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  departmentId: number;
  phoneNumber: string;
}

export interface SubmitEmailData {
  email: string;
}

export interface SubmitCertificationCodeData {
  email: string;
  code: string;
}
