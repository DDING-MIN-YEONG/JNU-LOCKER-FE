import { useState } from "react";

export const useEmailSend = () => {
  const [isEmailSend, setIsEmailSend] = useState(false);

  return {
    isEmailSend,
    setIsEmailSend,
  };
};
