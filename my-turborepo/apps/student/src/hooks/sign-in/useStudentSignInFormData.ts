import { ChangeEvent, useState } from "react";

export interface CommitteeFormData {
  email: string;
  password: string;
}

export const useStudentSignInFormData = () => {
  const [formData, setFormData] = useState<CommitteeFormData>({
    email: "",
    password: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    formData,
    setFormData,
    onInputChange,
  };
};
