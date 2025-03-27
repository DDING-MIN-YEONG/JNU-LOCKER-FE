import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

const useSignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    certificationNumber: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    if (!formData.email) {
      return "이메일을 입력해 주세요.";
    }
    if (!formData.certificationNumber) {
      return "인증번호를 입력해 주세요.";
    }
    if (!formData.password) {
      return "비밀번호를 입력해 주세요.";
    }
    if (!formData.passwordConfirm) {
      return "비밀번호 확인을 입력해 주세요.";
    }
    if (!isEmail(formData.email)) {
      return "올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.";
    }
    if (!isPassword(formData.password)) {
      return "비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.";
    }
    if (formData.password !== formData.passwordConfirm) {
      return "비밀번호와 비밀번호 확인은 일치해야 합니다.";
    }
    return null;
  };

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }
    // TODO : useMutation을 사용하여 회원가입 API 호출
    setError({ isError: false, errorMessage: "" });
    alert("회원가입이 완료되었습니다!");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onNextBtnClick = () => {
    router.push(ROUTE.REGISTER_INFO);
  };

  return {
    formAction,
    formData,
    onChange,
    error,
    onNextBtnClick,
  };
};

export default useSignUp;
