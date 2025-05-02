import { FormEvent } from "react";
import { COMMITTEE_SIGN_IN, VALIDATION_TYPES } from "@/constants/error";
import { isPassword } from "@/utils/validator";
import { useFormError } from "@/hooks/common/useFormError";
import { useCommitteeSignInFormData } from "@/hooks/committee/sign-in/useCommitteeSignInFormData";
import { useCommitteeSignIn } from "@/hooks/tanstack-query/committee/sign-in";

const useCommitteeSignInForm = () => {
  const { formData, onInputChange } = useCommitteeSignInFormData();
  const { onCommitteeSignIn: onSignIn } = useCommitteeSignIn();

  const { error, setFormError, clearError } = useFormError();

  const validateForm = () => {
    const fields = Object.keys(COMMITTEE_SIGN_IN) as Array<keyof typeof COMMITTEE_SIGN_IN>;

    for (const field of fields) {
      if (!formData[field]) {
        return COMMITTEE_SIGN_IN[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    if (!isPassword(formData.password)) {
      return COMMITTEE_SIGN_IN.password[VALIDATION_TYPES.FORMAT];
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
    onSignIn(formData);
  };

  return {
    formAction,
    formData,
    error,
    onInputChange,
  };
};

export default useCommitteeSignInForm;
