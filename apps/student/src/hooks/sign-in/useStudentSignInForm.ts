import { FormEvent } from "react";
import { isJnuEmail, isPassword } from "@/utils/validator";
import { SIGN_IN } from "@/constants/error";
import { useStudentSignIn } from "@/hooks/tanstack-query/student/sign-in";
import { useFormError } from "@/hooks/common/useFormError";
import { useStudentSignInFormData } from "./useStudentSignInFormData";

const useStudentSignInForm = () => {
  const { formData, onInputChange } = useStudentSignInFormData();

  const { error, setFormError, clearError } = useFormError();

  const { onStudentSignIn, isSignInLoading } = useStudentSignIn();

  const validateForm = () => {
    const fields = Object.keys(SIGN_IN) as Array<keyof typeof SIGN_IN>;
    for (const field of fields) {
      if (!formData[field]) {
        return SIGN_IN[field].required;
      }
    }

    if (!isJnuEmail(formData.email)) {
      return SIGN_IN.email.format;
    }

    if (!isPassword(formData.password)) {
      return SIGN_IN.password.format;
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
    isSignInLoading,
  };
};

export default useStudentSignInForm;
