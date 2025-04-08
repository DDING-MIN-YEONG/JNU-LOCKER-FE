import { ChangeEvent, FormEvent, useState } from "react";
import { COMMITTEE_SIGN_UP_PERSONAL_INFO, VALIDATION_TYPES } from "@/constants/error";
import { phoneNumberReplace } from "@/utils/replacer";
import { isEmail, isPassword } from "@/utils/validator";

const usePersonalInfo = () => {
  const [formData, setFormData] = useState({
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

  const validateForm = () => {
    const fields = Object.keys(COMMITTEE_SIGN_UP_PERSONAL_INFO) as Array<keyof typeof COMMITTEE_SIGN_UP_PERSONAL_INFO>;
    for (const field of fields) {
      if (!formData[field]) {
        return COMMITTEE_SIGN_UP_PERSONAL_INFO[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    if (!isEmail(formData.email)) {
      return COMMITTEE_SIGN_UP_PERSONAL_INFO.email[VALIDATION_TYPES.FORMAT];
    }
    if (!isPassword(formData.password)) {
      return COMMITTEE_SIGN_UP_PERSONAL_INFO.password[VALIDATION_TYPES.FORMAT];
    }
    if (formData.password !== formData.passwordConfirm) {
      return COMMITTEE_SIGN_UP_PERSONAL_INFO.passwordConfirm[VALIDATION_TYPES.MATCH];
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

    alert("회원가입이 완료되었습니다.");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: id === "phoneNumber" ? phoneNumberReplace(value) : value,
    }));
  };

  return {
    formAction,
    formData,
    onChange,
    error,
  };
};

export default usePersonalInfo;
