"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/ResetPassword/Form/index.module.scss";
import useResetPassword from "@/hooks/reset-password/useResetPassword";

const cn = classNames.bind(styles);

export default function ResetPasswordForm() {
  const { formAction, formData, onChange, error } = useResetPassword();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <div className={cn("inputContainer")}>
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
      <Button type="submit" className={cn("resetPasswordBtn")}>
        비밀번호 재설정
      </Button>
    </form>
  );
}
