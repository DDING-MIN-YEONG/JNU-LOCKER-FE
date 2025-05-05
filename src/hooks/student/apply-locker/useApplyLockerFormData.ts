import { ChangeEvent, useState } from "react";

export const useApplyLockerFormData = () => {
  const [formData, setFormData] = useState({
    lockerNumber: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    formData,
    setFormData,
    onChange,
  };
};
