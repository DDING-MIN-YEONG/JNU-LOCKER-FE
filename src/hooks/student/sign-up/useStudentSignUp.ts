import { FormEvent } from "react";
import { isJnuEmail, isPassword } from "@/utils/validator";
import { STUDENT_SIGN_UP } from "@/constants/error";
import {
  useDepartmentsQuery,
  useOrganizationsQuery,
  useSubmitEmail,
  useVerifyCertificationCode,
} from "@/hooks/tanstack-query/common/sign-up";
import { useStudentSignUp } from "@/hooks/tanstack-query/student/sign-up";
import { useStudentFormData } from "@/hooks/student/sign-up/useStudentFormData";
import { useFormError } from "@/hooks/common/useFormError";
import { useEmailCertification } from "@/hooks/common/useEmailCertification";
import { useTimer } from "@/hooks/common/useTimer";

const useStudentSignUpForm = () => {
  const { onStudentSignUp } = useStudentSignUp();

  const { formData, onSelectChange, onInputChange } = useStudentFormData();

  const { isEmailCertification, setIsEmailCertification } = useEmailCertification();

  const { countdown, setCountdown } = useTimer();

  const { onSubmitEmail: submitEmail } = useSubmitEmail(setIsEmailCertification, setCountdown);

  const { error, setFormError, clearError } = useFormError();

  const { onVerifyCertificationCode } = useVerifyCertificationCode(setCountdown);

  const onSubmitEmail = () => {
    if (!isJnuEmail(formData.email)) {
      alert("전남대학교 학생 이메일을 입력해주세요.");
      return;
    }

    submitEmail({ email: formData.email });
  };

  let { data: organizations } = useOrganizationsQuery("학생회");

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
        return STUDENT_SIGN_UP[field].required;
      }

      if (field === "email" && !isJnuEmail(formData.email)) {
        return STUDENT_SIGN_UP[field].format;
      }
      if (field === "email" && !formData.email) {
        return STUDENT_SIGN_UP[field].required;
      }
      if (field === "phoneNumber" && !formData.phoneNumber) {
        return STUDENT_SIGN_UP[field].required;
      }
      if (field === "name" && !formData.name) {
        return STUDENT_SIGN_UP[field].required;
      }
      if (field === "password" && !formData.password) {
        return STUDENT_SIGN_UP[field].required;
      }
      if (field === "password" && !isPassword(formData.password)) {
        return STUDENT_SIGN_UP[field].format;
      }
      if (field === "passwordConfirm" && !formData.passwordConfirm) {
        return STUDENT_SIGN_UP[field].required;
      }
      if (field === "passwordConfirm" && formData.password !== formData.passwordConfirm) {
        return STUDENT_SIGN_UP[field].match;
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

    onStudentSignUp({
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
    onInputChange,
    error,
    organizations,
    departments,
    isEmailCertification,
    onSubmitEmail,
    countdown,
    onVerifyCertificationCode,
  };
};

export default useStudentSignUpForm;
