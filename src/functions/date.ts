export const convertToKST = (dateString: Date): string => {
  return new Date(new Date(dateString).getTime() + 9 * 60 * 60 * 1000).toISOString().split(".")[0];
};
