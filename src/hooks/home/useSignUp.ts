import { ChangeEvent, FormEvent, useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력해 주세요.");
      return;
    }
    if (!certificationNumber) {
      alert("인증번호를 입력해 주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }
    if (!passwordConfirm) {
      alert("비밀번호 확인을 입력해 주세요.");
      return;
    }
    if (!isEmail(email)) {
      alert("올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.");
      setIsError(true);
      setErrorMessage("올바른 형식(@jnu.ac.kr로 끝나는)의 이메일을 입력해 주세요.");
      return;
    }
    if (!isPassword(password)) {
      alert("비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.");
      setIsError(true);
      setErrorMessage("비밀번호는 최소 9자 이상이며 최소 하나의 영문자, 숫자, 특수문자가 포함되어야 합니다.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인은 일치해야 합니다.");
      setIsError(true);
      setErrorMessage("비밀번호와 비밀번호 확인은 일치해야 합니다.");
      return;
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeCertificationNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCertificationNumber(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  return {
    formAction,
    email,
    onChangeEmail,
    certificationNumber,
    onChangeCertificationNumber,
    password,
    onChangePassword,
    passwordConfirm,
    onChangePasswordConfirm,
    isError,
    errorMessage,
  };
};

export default useSignUp;
