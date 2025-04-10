import { FormEvent } from "react";
import { COMMITTEE_SIGN_UP, VALIDATION_TYPES } from "@/constants/error";
import { useCommitteeSignUp } from "@/hooks/tanstack-query/committee/sign-up";
import { isEmail, isPassword } from "@/utils/validator";
import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";
import { useCommitteeFormData } from "@/hooks/committee/sign-up/useCommitteeFormData";
import { useFormError } from "@/hooks/common/useFormError";

const useCommitteeSignUpForm = () => {
  const { onCommitteeSignUp } = useCommitteeSignUp();

  const { formData, onSelectChange, onInputChange } = useCommitteeFormData();

  const { error, setFormError, clearError } = useFormError();

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

      if (field === "email" && formData.category.value === "학생회" && !isEmail(formData.email)) {
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
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.MATCH];
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

    onCommitteeSignUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      departmentId: formData.department.id,
      phoneNumber: formData.phoneNumber,
    });
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

export default useCommitteeSignUpForm;
