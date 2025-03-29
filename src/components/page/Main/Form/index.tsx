"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/Main/Form/index.module.scss";
import useSignIn from "@/hooks/sign-in/useSignIn";

const cn = classNames.bind(styles);

export default function SignInForm() {
  const { formAction, formData, onChange, error } = useSignIn();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <div className={cn("inputContainer")}>
        <TextInput
          id="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={formData.email}
          onChange={onChange}
        />
        <TextInput
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={formData.password}
          onChange={onChange}
        />
      </div>
      {error.isError && (
        <p role="alert" className={cn("errorMessage")}>
          {error.errorMessage}
        </p>
      )}
      <Button type="submit" className={cn("signInBtn")}>
        로그인
      </Button>
    </form>
  );
}
