"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/ResetPassword/Form/index.module.scss";
import useResetPassword from "@/hooks/reset-password/useResetPassword";
import Txt from "@/components/design-system/Txt";

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
        <Txt size="tiny" color="error">
          {error.errorMessage}
        </Txt>
      )}
      <Button type="submit" className={cn("resetPasswordBtn")}>
        <Txt size="h4" weight="medium" color="white">
          비밀번호 재설정
        </Txt>
      </Button>
    </form>
  );
}
