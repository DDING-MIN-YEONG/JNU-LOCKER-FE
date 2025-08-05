import { FormEvent } from "react";
import { APPLY_LOCKER } from "@/constants/error";
import { useFormError } from "@/hooks/common/useFormError";
import { useApplyLockerFormData } from "./useApplyLockerFormData";
import { usePostApplyLocker } from "@/hooks/tanstack-query/student/apply-locker/usePostApplyLocker";
import { useGetApplyLockerPageEventId } from "./useGetApplyLockerPageEventId";

const useApplyLocker = () => {
  const { formData, onChange, setLockerFormData } = useApplyLockerFormData();

  const { error, setFormError, clearError } = useFormError();

  const { onApplyLocker, isApplyLockerLoading } = usePostApplyLocker();

  const { eventId } = useGetApplyLockerPageEventId();

  const validateForm = () => {
    const fields = Object.keys(APPLY_LOCKER) as Array<keyof typeof APPLY_LOCKER>;
    for (const field of fields) {
      if (!formData[field]) {
        return APPLY_LOCKER[field].required;
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

    onApplyLocker(eventId, formData.lockerNumber, Number(formData.floor));
  };

  return {
    formData,
    onChange,
    error,
    formAction,
    isApplyLockerLoading,
    setLockerFormData,
  };
};

export default useApplyLocker;
