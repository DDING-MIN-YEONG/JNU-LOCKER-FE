export const convertToKST = (dateString: Date): string => {
  return new Date(new Date(dateString).getTime() + 9 * 60 * 60 * 1000).toISOString().split(".")[0];
};

export const getYear = (dateString: Date | string): string => {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  return date.getFullYear().toString();
};

export const getMonth = (dateString: Date | string): string => {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  return (date.getMonth() + 1).toString().padStart(2, "0");
};

export const getDate = (dateString: Date | string): string => {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  return date.getDate().toString().padStart(2, "0");
};

export const getHours = (dateString: Date | string): string => {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  return date.getHours().toString().padStart(2, "0");
};

export const getMinutes = (dateString: Date | string): string => {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  return date.getMinutes().toString().padStart(2, "0");
};
