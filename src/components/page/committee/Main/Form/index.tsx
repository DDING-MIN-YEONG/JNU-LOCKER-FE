"use client";

import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import TextInput from "@/components/common/TextInput";
import useCommitteeSignInForm from "@/hooks/committee/sign-in/useCommitteeSignInForm";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function CommitteeSignInForm() {
  const { formAction, formData, error, onInputChange } = useCommitteeSignInForm();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <Txt weight="semiBold" className={cn("title")}>
        로그인
      </Txt>
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
      <Button type="submit" className={cn("completeBtn")}>
        <Txt size="h5" color="white" weight="medium">
          로그인
        </Txt>
      </Button>
      <div className={cn("linkContainer")}>
        <Link href={ROUTE.COMMITTEE.SIGN_UP}>
          <Txt size="small" className={cn("link")}>
            회원가입
          </Txt>
        </Link>
      </div>
    </form>
  );
}
