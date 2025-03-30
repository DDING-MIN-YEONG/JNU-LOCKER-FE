import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail } from "@/utils/validator";
import { ENTER_EMAIL } from "@/constants/error";

const useEnterEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    for (const [key, errorMessage] of Object.entries(ENTER_EMAIL)) {
      if (!formData[key as keyof typeof formData]) {
        return errorMessage;
      }
    }

    if (!isEmail(formData.email)) {
      return "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.";
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

    alert("메일 전송에 전송하였습니다.");
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
