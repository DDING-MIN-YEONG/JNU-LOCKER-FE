import { VALIDATION_TYPES } from "@/constants/error/validationTypes";

export const COMMITTEE_SIGN_IN = {
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
  },
  password: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호를 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.",
  },
};

export const COMMITTEE_SIGN_UP = {
  category: {
    [VALIDATION_TYPES.REQUIRED]: "유형을 선택해 주세요.",
  },
  affiliation: {
    [VALIDATION_TYPES.REQUIRED]: "소속을 선택해 주세요.",
  },
  studentNumber: {
    [VALIDATION_TYPES.REQUIRED]: "학번을 입력해 주세요.",
  },
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
  },
  phoneNumber: {
    [VALIDATION_TYPES.REQUIRED]: "연락처를 입력해 주세요.",
  },
  name: {
    [VALIDATION_TYPES.REQUIRED]: "이름을 입력해 주세요.",
  },
  password: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호를 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.",
  },
  passwordConfirm: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호 확인을 입력해 주세요.",
    [VALIDATION_TYPES.MATCH]: "비밀번호와 비밀번호 확인은 일치해야 합니다.",
  },
};
