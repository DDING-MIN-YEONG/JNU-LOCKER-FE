import { VALIDATION_TYPES } from "@/constants/error/validationTypes";

export const CREATE_ANNOUNCEMENT_VALIDATION = {
  title: {
    [VALIDATION_TYPES.REQUIRED]: "공지사항 제목을 입력해주세요.",
  },
  content: {
    [VALIDATION_TYPES.REQUIRED]: "공지사항 내용을 입력해주세요.",
  },
  department: {
    [VALIDATION_TYPES.REQUIRED]: "참여 학과를 선택해주세요.",
    [VALIDATION_TYPES.DUPLICATE]: "이미 선택된 학과입니다.",
  },
};
