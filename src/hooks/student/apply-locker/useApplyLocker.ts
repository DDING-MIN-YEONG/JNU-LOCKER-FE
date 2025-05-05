import { ChangeEvent, useState } from "react";
import { APPLY_LOCKER, VALIDATION_TYPES } from "@/constants/error";
import { useFormError } from "@/hooks/common/useFormError";

const useApplyLocker = () => {
  const [formData, setFormData] = useState({
    lockerNumber: "",
  });

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

  const onApplyBtnClick = () => {
    clearError();

    const errorMessage = validateForm();
    if (errorMessage) {
      setFormError(errorMessage);
      alert(errorMessage);
      return;
    }

    alert("사물함 신청이 완료되었습니다.");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    formData,
    onChange,
    error,
    onApplyBtnClick,
  };
};

export default useApplyLocker;
