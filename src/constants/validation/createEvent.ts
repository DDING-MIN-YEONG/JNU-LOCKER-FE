import { VALIDATION_TYPES } from "@/constants/error/validationTypes";

export const CREATE_EVENT_VALIDATION = {
  department: {
    [VALIDATION_TYPES.DUPLICATE]: "이미 선택된 학과입니다.",
    [VALIDATION_TYPES.REQUIRED]: "참여 부서를 선택해주세요.",
  },
  floor: {
    [VALIDATION_TYPES.REQUIRED]: "최소 1개의 층은 존재해야 합니다.",
    [VALIDATION_TYPES.MIN]: "층 번호는 1 이상이어야 합니다.",
  },
  prefix: {
    [VALIDATION_TYPES.REQUIRED]: "최소 1개의 접두사는 존재해야 합니다.",
  },
  range: {
    [VALIDATION_TYPES.REQUIRED]: "최소 1개의 범위는 존재해야 합니다.",
  },
  title: {
    [VALIDATION_TYPES.REQUIRED]: "이벤트 제목을 입력해주세요.",
  },
  startAt: {
    [VALIDATION_TYPES.REQUIRED]: "시작 시간을 선택해주세요.",
  },
  endAt: {
    [VALIDATION_TYPES.REQUIRED]: "종료 시간을 선택해주세요.",
  },
  lockerNumber: {
    [VALIDATION_TYPES.REQUIRED]: "사물함 번호를 입력해주세요.",
  },
};
