import { FormEvent } from "react";
import { APPLY_LOCKER, VALIDATION_TYPES } from "@/constants/error";
import { useFormError } from "@/hooks/common/useFormError";
import { useApplyLockerFormData } from "./useApplyLockerFormData";

const useApplyLocker = () => {
  const { formData, onChange } = useApplyLockerFormData();

  const { error, setFormError, clearError } = useFormError();

  const validateForm = () => {
    const fields = Object.keys(APPLY_LOCKER) as Array<keyof typeof APPLY_LOCKER>;
    for (const field of fields) {
      if (!formData[field]) {
        return APPLY_LOCKER[field][VALIDATION_TYPES.REQUIRED];
      }
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

    alert("사물함 신청이 완료되었습니다.");
  };

  return {
    formData,
    onChange,
    error,
    formAction,
  };
};

export default useApplyLocker;
