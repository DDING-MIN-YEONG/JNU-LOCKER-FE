import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { STUDENT_SIGN_UP, VALIDATION_TYPES } from "@/constants/error";
import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";
import { phoneNumberReplace } from "@/utils/replacer";
import { useStudentSignUp } from "../tanstack-query/student/sign-up";

interface FormData {
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

const useStudentSignUpForm = () => {
  const { onStudentSignUp } = useStudentSignUp();

  const [formData, setFormData] = useState<FormData>({
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

  let organizations = useOrganizationsQuery("학생회");

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  const validateForm = () => {
    const fields = Object.keys(STUDENT_SIGN_UP) as Array<keyof typeof STUDENT_SIGN_UP>;

    for (const field of fields) {
      if (field === "affiliation" && formData.affiliation.value === "값을 선택해주세요.") {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }

      if (field === "email" && !isEmail(formData.email)) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.FORMAT];
      }
      if (field === "email" && !formData.email) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "phoneNumber" && !formData.phoneNumber) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "phoneNumberCertificationNumber" && !formData.phoneNumberCertificationNumber) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "name" && !formData.name) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "password" && !formData.password) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "password" && !isPassword(formData.password)) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.FORMAT];
      }
      if (field === "passwordConfirm" && !formData.passwordConfirm) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
      }
      if (field === "passwordConfirm" && formData.password !== formData.passwordConfirm) {
        return STUDENT_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
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

    onStudentSignUp({
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
    onInputChange,
    error,
    organizations,
    departments,
  };
};

export default useStudentSignUpForm;
