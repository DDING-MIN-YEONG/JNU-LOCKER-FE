"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import useStudentSignInForm from "@/hooks/student/sign-in/useStudentSignInForm";
import Txt from "@/components/design-system/Txt";
import Spinner from "@/components/common/Spinner";

const cn = classNames.bind(styles);

export default function SignInForm() {
  const { formAction, formData, error, onInputChange, isSignInLoading } = useStudentSignInForm();

  return (
    <>
      <form onSubmit={formAction} className={cn("form")}>
        <div className={cn("inputContainer")}>
          <TextInput
            id="email"
            type="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={formData.email}
            onChange={onInputChange}
          />
          <TextInput
            id="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            value={formData.password}
            onChange={onInputChange}
          />
        </div>
        {error.isError && (
          <Txt size="tiny" color="error">
            {error.errorMessage}
          </Txt>
        )}
        <Button type="submit" className={cn("signInBtn")} disabled={isSignInLoading}>
          <Txt size="h4" weight="medium" color="white">
            로그인
          </Txt>
        </Button>
      </form>
      {isSignInLoading && <Spinner />}
    </>
  );
}
