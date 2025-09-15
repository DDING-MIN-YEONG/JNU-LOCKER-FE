import { ChangeEvent, useState } from "react";
import { phoneNumberReplace } from "@/utils/replacer";

export interface StudentFormData {
  affiliation: {
    id: number;
    value: string;
  };
  department: {
    id: number;
    value: string;
  };
  name: string;
  email: string;
  emailCertificationNumber: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  studentNumber: string;
}

export const useStudentFormData = () => {
  const [formData, setFormData] = useState<StudentFormData>({
    affiliation: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    department: {
      id: 0,
      value: "선택 안함",
    },
    name: "",
    email: "",
    emailCertificationNumber: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    studentNumber: "",
  });

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    setFormData((prev) => ({
      ...prev,
      [id]: { id: selectedId, value },
    }));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: id === "phoneNumber" ? phoneNumberReplace(value) : value,
    }));
  };

  return {
    formData,
    setFormData,
    onSelectChange,
    onInputChange,
  };
};
