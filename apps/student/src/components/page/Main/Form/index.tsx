"use client";

import useStudentSignInForm from "@/hooks/sign-in/useStudentSignInForm";
import Spinner from "@repo/ui/common/Spinner/index";
import TextInput from "@repo/ui/common/TextInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

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
