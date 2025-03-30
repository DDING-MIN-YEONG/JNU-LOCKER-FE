import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_UP, VALIDATION_TYPES } from "@/constants/error";

const useSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    certificationNumber: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(SIGN_UP) as Array<keyof typeof SIGN_UP>;
    for (const field of fields) {
      if (!formData[field]) {
        return SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    if (!isEmail(formData.email)) {
      return SIGN_UP.email[VALIDATION_TYPES.FORMAT];
    }
    if (!isPassword(formData.password)) {
      return SIGN_UP.password[VALIDATION_TYPES.FORMAT];
    }
    if (formData.password !== formData.passwordConfirm) {
      return SIGN_UP.passwordConfirm[VALIDATION_TYPES.MATCH];
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

    alert("기본 정보 등록을 위한 페이지로 이동합니다.");
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

export default useSignUp;
