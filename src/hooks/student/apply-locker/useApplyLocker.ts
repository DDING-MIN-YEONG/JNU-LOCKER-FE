import { ChangeEvent, useState } from "react";
import { APPLY_LOCKER, VALIDATION_TYPES } from "@/constants/error";

const useApplyLocker = () => {
  const [formData, setFormData] = useState({
    firstPriority: "",
    secondPriority: "",
    thirdPriority: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(APPLY_LOCKER) as Array<keyof typeof APPLY_LOCKER>;
    for (const field of fields) {
      if (!formData[field]) {
        return APPLY_LOCKER[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    return null;
  };

  const onSaveBtnClick = () => {
    setError({ isError: false, errorMessage: "" });

    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }

    alert("임시저장이 완료되었습니다.");
  };

  const onApplyBtnClick = () => {
    setError({ isError: false, errorMessage: "" });

    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
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
    onSaveBtnClick,
    onApplyBtnClick,
  };
};

export default useApplyLocker;
