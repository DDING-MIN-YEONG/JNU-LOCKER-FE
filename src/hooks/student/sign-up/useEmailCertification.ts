import { useState } from "react";

export const useEmailCertification = () => {
  const [isEmailCertification, setIsEmailCertification] = useState(false);

  return {
    isEmailCertification,
    setIsEmailCertification,
  };
};
