import { FormEvent } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { SIGN_IN, VALIDATION_TYPES } from "@/constants/error";
import { useStudentSignIn } from "@/hooks/tanstack-query/student/sign-in";
import { useFormError } from "@/hooks/common/useFormError";
import { useStudentSignInFormData } from "./useStudentSignInFormData";

const useStudentSignInForm = () => {
  const { formData, onInputChange } = useStudentSignInFormData();

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

  return {
    formAction,
    formData,
    onInputChange,
    error,
  };
};

export default useStudentSignInForm;
