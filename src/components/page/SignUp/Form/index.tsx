"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/SignUp/Form/index.module.scss";
import useSignUp from "@/hooks/home/useSignUp";

const cn = classNames.bind(styles);

export default function SignUpForm() {
  const {
    email,
    errorMessage,
    formAction,
    isError,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    password,
    passwordConfirm,
    certificationNumber,
    onChangeCertificationNumber,
  } = useSignUp();

  return (
    <form onSubmit={formAction}>
      <div className={cn("inputContainer")}>
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="email"
          type="email"
          label="전남대학교 이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onChangeEmail}
        >
          <Button className={cn("certificationBtn")}>메일전송</Button>
        </TextInput>
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="certificationNumber"
          type="text"
          label="인증번호 입력"
          placeholder="인증번호를 입력해주세요."
          value={certificationNumber}
          onChange={onChangeCertificationNumber}
        >
          <Button className={cn("certificationBtn")}>인증하기</Button>
        </TextInput>
        <TextInput
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onChangePassword}
        />
        <TextInput
          id="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
      </div>
      {isError && <p className={cn("errorMessage")}>{errorMessage}</p>}
      <div className={cn("btnContainer")}>
        <Button type="submit" className={cn("nextBtn")}>
          다음
        </Button>
      </div>
    </form>
  );
}
