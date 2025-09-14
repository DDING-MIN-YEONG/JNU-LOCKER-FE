import { FormEvent } from "react";
import { COMMITTEE_SIGN_UP } from "@/constants/error";
import { useCommitteeSignUp } from "@/hooks/tanstack-query/committee/sign-up";
import { isPassword } from "@/utils/validator";
import {
  useDepartmentsQuery,
  useOrganizationsQuery,
  useSubmitEmail,
  useVerifyCertificationCode,
} from "@/hooks/tanstack-query/common/sign-up";
import { useCommitteeFormData } from "@/hooks/committee/sign-up/useCommitteeFormData";
import { useFormError } from "@/hooks/common/useFormError";
import { useTimer } from "@/hooks/common/useTimer";
import { useEmailSend } from "@/hooks/common/useEmailSend";

const useCommitteeSignUpForm = () => {
  const { onCommitteeSignUp, isSignUpLoading } = useCommitteeSignUp();

  const { formData, onSelectChange, onInputChange } = useCommitteeFormData();

  const { isEmailSend, setIsEmailSend } = useEmailSend();

  const { countdown, setCountdown } = useTimer();

  const { onSubmitEmail, isEmailLoading } = useSubmitEmail(setIsEmailSend, setCountdown);

  const { error, setFormError, clearError } = useFormError();

  const { onVerifyCertificationCode, isVerifyCertificationLoading } = useVerifyCertificationCode(setCountdown);

  let { data: organizations } = useOrganizationsQuery(formData.category.value);
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
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "affiliation" && formData.affiliation.value === "값을 선택해주세요.") {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "studentNumber" && !formData.studentNumber) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "email" && !formData.email) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "phoneNumber" && !formData.phoneNumber) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "name" && !formData.name) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "password" && !formData.password) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "password" && !isPassword(formData.password)) {
        return COMMITTEE_SIGN_UP[field].format;
      }
      if (field === "passwordConfirm" && !formData.passwordConfirm) {
        return COMMITTEE_SIGN_UP[field].required;
      }
      if (field === "passwordConfirm" && formData.password !== formData.passwordConfirm) {
        return COMMITTEE_SIGN_UP[field].match;
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
      studentNumber: formData.studentNumber,
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
    isEmailSend,
    countdown,
    onSubmitEmail,
    onVerifyCertificationCode,
    isEmailLoading,
    isSignUpLoading,
    isVerifyCertificationLoading,
  };
};

export default useCommitteeSignUpForm;
