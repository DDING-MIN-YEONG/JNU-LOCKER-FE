import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_UP } from "@/constants/error";

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
    for (const [key, errorMessage] of Object.entries(SIGN_UP)) {
      if (!formData[key as keyof typeof formData]) {
        return errorMessage;
      }
    }

    if (!isEmail(formData.email)) {
      return "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.";
    }
    if (!isPassword(formData.password)) {
      return "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.";
    }
    if (formData.password !== formData.passwordConfirm) {
      return "비밀번호와 비밀번호 확인은 일치해야 합니다.";
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
