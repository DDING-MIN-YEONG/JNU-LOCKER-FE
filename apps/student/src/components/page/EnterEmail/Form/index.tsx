"use client";

import useEnterEmail from "@/hooks/enter-email/useEnterEmail";
import { LabeledInput } from "@repo/ui/common/LabeledInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function EnterEmailForm() {
  const { formAction, formData, onChange, error } = useEnterEmail();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <div className={cn("inputContainer")}>
        <LabeledInput
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
        <Txt size="tiny" color="error">
          {error.errorMessage}
        </Txt>
      )}
      <Button type="submit" className={cn("emailBtn")}>
        <Txt size="h4" weight="medium" color="white">
          메일 전송
        </Txt>
      </Button>
    </form>
  );
}
