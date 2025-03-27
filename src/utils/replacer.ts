export const phoneNumberReplace = (phoneNumber: string) =>
  phoneNumber
    .replace(/[^0-9]/g, "")
    .replace(/([0-9]{3})([0-9]{4})([0-9]{4})/, "$1-$2-$3")
    .slice(0, 13);
