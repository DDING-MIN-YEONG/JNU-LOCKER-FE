import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_IN, VALIDATION_TYPES } from "@/constants/error";

const useSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(SIGN_IN) as Array<keyof typeof SIGN_IN>;
    for (const field of fields) {
      if (!formData[field]) {
        return SIGN_IN[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    if (!isEmail(formData.email)) {
      return SIGN_IN.email[VALIDATION_TYPES.FORMAT];
    }

    if (!isPassword(formData.password)) {
      return SIGN_IN.password[VALIDATION_TYPES.FORMAT];
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
    // TODO : useMutation을 사용하여 로그인 API 호출
    // TODO : 로그인 API 호출 성공 시 페이지 이동

    alert("로그인에 성공했습니다.");
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

export default useSignIn;
