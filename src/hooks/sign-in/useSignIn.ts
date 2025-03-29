import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_IN } from "@/constants/error";

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
    for (const [key, errorMessage] of Object.entries(SIGN_IN)) {
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
