import { formatToKoreanFullTime } from "@/utils/date";

export const getEffectiveDate = (createdAt: Date, updatedAt: Date) => {
  if (formatToKoreanFullTime(createdAt) === formatToKoreanFullTime(updatedAt)) {
    return { date: createdAt, isUpdate: false };
  }

  return { date: updatedAt, isUpdate: true };
};
