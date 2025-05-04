export const formatToKoreanTime = (isoDate: Date): string => {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = date.getHours();

  return `${year}-${month}-${day} ${hours}시`;
};
