"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/EnterEmail/Form/index.module.scss";
import useEnterEmail from "@/hooks/enter-email/useEnterEmail";

const cn = classNames.bind(styles);

export default function EnterEmailForm() {
  const { formAction, formData, onChange, error } = useEnterEmail();

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
        />
      </div>
      {error.isError && (
        <p role="alert" className={cn("errorMessage")}>
          {error.errorMessage}
        </p>
      )}
      <Button type="submit" className={cn("emailBtn")}>
        메일 전송
      </Button>
    </form>
  );
}
