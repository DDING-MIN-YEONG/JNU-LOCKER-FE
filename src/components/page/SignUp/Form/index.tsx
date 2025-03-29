"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/SignUp/Form/index.module.scss";
import useSignUp from "@/hooks/sign-up/useSignUp";

const cn = classNames.bind(styles);

export default function SignUpForm() {
  const { formAction, formData, onChange, error } = useSignUp();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <div className={cn("inputContainer")}>
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="email"
          type="email"
          label="전남대학교 이메일"
          placeholder="이메일을 입력해주세요."
          value={formData.email}
          onChange={onChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            메일전송
          </Button>
        </TextInput>
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="certificationNumber"
          type="text"
          label="인증번호 입력"
          placeholder="인증번호를 입력해주세요."
          value={formData.certificationNumber}
          onChange={onChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            인증하기
          </Button>
        </TextInput>
        <TextInput
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={formData.password}
          onChange={onChange}
        />
        <TextInput
          id="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          value={formData.passwordConfirm}
          onChange={onChange}
        />
      </div>
      {error.isError && (
        <p role="alert" className={cn("errorMessage")}>
          {error.errorMessage}
        </p>
      )}
      <div className={cn("btnContainer")}>
        <Button type="submit" className={cn("nextBtn")}>
          다음
        </Button>
      </div>
    </form>
  );
}
