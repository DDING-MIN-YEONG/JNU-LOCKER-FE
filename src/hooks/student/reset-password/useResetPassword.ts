import { ChangeEvent, FormEvent, useState } from "react";
import { isPassword } from "@/utils/validator";
import { RESET_PASSWORD } from "@/constants/error";
// import useGetCodeParameter from "@/hooks/reset-password/useGetCodeParameter";

const useResetPassword = () => {
  // const code = useGetCodeParameter();
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(RESET_PASSWORD) as Array<keyof typeof RESET_PASSWORD>;
    for (const field of fields) {
      if (!formData[field]) {
        return RESET_PASSWORD[field].required;
      }
    }

    if (!isPassword(formData.password)) {
      return RESET_PASSWORD.password.format;
    }
    if (formData.password !== formData.passwordConfirm) {
      return RESET_PASSWORD.passwordConfirm.match;
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

    alert("비밀번호가 재설정되었습니다.");
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

export default useResetPassword;
