import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_IN, VALIDATION_TYPES } from "@/constants/error";
import { useStudentSignIn } from "@/hooks/tanstack-query/student/sign-in";
import { useFormError } from "@/hooks/common/useFormError";

const useSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { error, setFormError, clearError } = useFormError();

  const { onStudentSignIn } = useStudentSignIn();

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
    clearError();

    const errorMessage = validateForm();
    if (errorMessage) {
      setFormError(errorMessage);
      alert(errorMessage);
      return;
    }
    onStudentSignIn(formData);
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
