import { ChangeEvent, FormEvent, useState } from "react";
import { COMMITTEE_SIGN_UP, VALIDATION_TYPES } from "@/constants/error";
import { useCommitteeSignUp } from "@/hooks/tanstack-query/committee/sign-up";
import { phoneNumberReplace } from "@/utils/replacer";
import { isEmail, isPassword } from "@/utils/validator";
import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";

interface FormData {
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
  name: string;
  email: string;
  emailCertificationNumber: string;
  phoneNumber: string;
  phoneNumberCertificationNumber: string;
  password: string;
  passwordConfirm: string;
}

const useSignUpForm = () => {
  const { onCommitteeSignUp } = useCommitteeSignUp();

  const [formData, setFormData] = useState<FormData>({
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
    name: "",
    email: "",
    emailCertificationNumber: "",
    phoneNumber: "",
    phoneNumberCertificationNumber: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  let organizations = useOrganizationsQuery(formData.category.value);
  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  const validateForm = () => {
    const fields = Object.keys(COMMITTEE_SIGN_UP) as Array<keyof typeof COMMITTEE_SIGN_UP>;

    for (const field of fields) {
      if (field === "category" && formData.category.value === "값을 선택해주세요.") {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "affiliation" && formData.affiliation.value === "값을 선택해주세요.") {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }

      if (field === "email" && formData.category.value === "학생회" && isEmail(formData.email)) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.FORMAT];
      }
      if (field === "email" && !formData.email) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "phoneNumber" && !formData.phoneNumber) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "phoneNumberCertificationNumber" && !formData.phoneNumberCertificationNumber) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "name" && !formData.name) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "password" && !formData.password) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "password" && !isPassword(formData.password)) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.FORMAT];
      }
      if (field === "passwordConfirm" && !formData.passwordConfirm) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "passwordConfirm" && formData.password !== formData.passwordConfirm) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    return null;
  };

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ isError: false, errorMessage: "" });

    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }

    onCommitteeSignUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      departmentId: formData.department.id,
      phoneNumber: formData.phoneNumber,
    });
  };

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
    formAction,
    formData,
    onSelectChange,
    error,
    organizations,
    departments,
    onInputChange,
  };
};

export default useSignUpForm;
