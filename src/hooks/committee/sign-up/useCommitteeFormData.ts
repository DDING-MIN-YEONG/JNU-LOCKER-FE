import { ChangeEvent, useState } from "react";
import { phoneNumberReplace } from "@/utils/replacer";

export interface CommitteeFormData {
  category: {
    id: number;
    value: "학생회" | "위원회" | "값을 선택해주세요.";
  };
  affiliation: {
    id: number;
    value: string;
  };
  department: {
    id: number;
    value: string;
  };
  studentNumber: string;
  email: string;
  emailCertificationNumber: string;
  phoneNumber: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export const useCommitteeFormData = () => {
  const [formData, setFormData] = useState<CommitteeFormData>({
    category: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    affiliation: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    department: {
      id: 0,
      value: "선택 안함",
    },
    studentNumber: "",
    email: "",
    emailCertificationNumber: "",
    phoneNumber: "",
    name: "",
    password: "",
    passwordConfirm: "",
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
