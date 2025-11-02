import { COMMITTEE_SIGN_IN } from "@/constants/error";
import { VALIDATION_TYPES } from "@/constants/error/validationTypes";
import { useFormError } from "@/hooks/common/useFormError";
import { useCommitteeSignInFormData } from "@/hooks/sign-in/useCommitteeSignInFormData";
import { useCommitteeSignIn } from "@/hooks/tanstack-query/sign-in";
import { isPassword } from "@/utils/validator";
import { FormEvent, useCallback } from "react";

const useCommitteeSignInForm = () => {
  const { formData, onInputChange } = useCommitteeSignInFormData();
  const { onCommitteeSignIn: onSignIn, isLoginLoading } = useCommitteeSignIn();
  const { error, setFormError, clearError } = useFormError();

  const validateForm = useCallback((): string | null => {
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
  }, [formData]);

  const formAction = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      clearError();

      const validationError = validateForm();

      if (validationError) {
        setFormError(validationError);
        return;
      }

      onSignIn(formData);
    },
    [formData, clearError, setFormError, onSignIn, validateForm],
  );

  return {
    formAction,
    formData,
    error,
    onInputChange,
    isLoginLoading,
  };
};

export default useCommitteeSignInForm;
