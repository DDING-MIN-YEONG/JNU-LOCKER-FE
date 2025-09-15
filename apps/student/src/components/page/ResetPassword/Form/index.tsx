"use client";

import useResetPassword from "@/hooks/reset-password/useResetPassword";
import TextInput from "@repo/ui/common/TextInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

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
