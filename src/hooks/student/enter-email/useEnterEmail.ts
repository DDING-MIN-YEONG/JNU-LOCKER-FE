import { ChangeEvent, FormEvent, useState } from "react";
import { isJnuEmail } from "@/utils/validator";
import { ENTER_EMAIL, VALIDATION_TYPES } from "@/constants/error";

const useEnterEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(ENTER_EMAIL) as Array<keyof typeof ENTER_EMAIL>;
    for (const field of fields) {
      if (!formData[field]) {
        return ENTER_EMAIL[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    if (!isJnuEmail(formData.email)) {
      return ENTER_EMAIL.email[VALIDATION_TYPES.FORMAT];
    }

    return null;
  };

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ isError: false, errorMessage: "" });

    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }

    alert("메일이 전송되었습니다. 입력하신 메일을 확인해주세요.");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    formAction,
    formData,
    onChange,
    error,
  };
};

export default useEnterEmail;
