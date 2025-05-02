export const VALIDATION_TYPES = {
  REQUIRED: "required",
  FORMAT: "format",
  MATCH: "match",
};

export const STUDENT_SIGN_UP = {
  affiliation: {
    [VALIDATION_TYPES.REQUIRED]: "소속을 입력해 주세요.",
  },
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.",
  },
  studentNumber: {
    [VALIDATION_TYPES.REQUIRED]: "학번을 입력해 주세요.",
  },
  emailCertificationNumber: {
    [VALIDATION_TYPES.REQUIRED]: "이메일 인증코드를 입력해 주세요.",
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

export const SIGN_IN = {
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.",
  },
  password: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호를 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.",
  },
};

export const ENTER_EMAIL = {
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.",
  },
};

export const RESET_PASSWORD = {
  password: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호를 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.",
  },
  passwordConfirm: {
    [VALIDATION_TYPES.REQUIRED]: "비밀번호 확인을 입력해 주세요.",
    [VALIDATION_TYPES.MATCH]: "비밀번호와 비밀번호 확인은 일치해야 합니다.",
  },
};

export const APPLY_LOCKER = {
  firstPriority: {
    [VALIDATION_TYPES.REQUIRED]: "신청할 사물함을 입력해 주세요.",
  },
};

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
    [VALIDATION_TYPES.REQUIRED]: "유형을 입력해 주세요.",
  },
  affiliation: {
    [VALIDATION_TYPES.REQUIRED]: "소속을 입력해 주세요.",
  },
  email: {
    [VALIDATION_TYPES.REQUIRED]: "이메일을 입력해 주세요.",
    [VALIDATION_TYPES.FORMAT]: "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.",
  },
  emailCertificationNumber: {
    [VALIDATION_TYPES.REQUIRED]: "이메일 인증코드를 입력해 주세요.",
  },
  phoneNumber: {
    [VALIDATION_TYPES.REQUIRED]: "연락처를 입력해 주세요.",
  },
  phoneNumberCertificationNumber: {
    [VALIDATION_TYPES.REQUIRED]: "연락처 인증코드를 입력해 주세요.",
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
