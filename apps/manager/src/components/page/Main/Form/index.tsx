"use client";

import { ROUTE } from "@/constants/routes";
import useCommitteeSignInForm from "@/hooks/sign-in/useCommitteeSignInForm";
import Spinner from "@repo/ui/common/Spinner/index";
import TextInput from "@repo/ui/common/TextInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function CommitteeSignInForm() {
  const { formAction, formData, error, onInputChange, isLoginLoading } = useCommitteeSignInForm();

  return (
    <>
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
        <Button type="submit" className={cn("completeBtn")} disabled={isLoginLoading}>
          <Txt size="h5" color="white" weight="medium">
            로그인
          </Txt>
        </Button>
        <div className={cn("linkContainer")}>
          <Link href={ROUTE.SIGN_UP}>
            <Txt size="small" className={cn("link")}>
              회원가입
            </Txt>
          </Link>
        </div>
      </form>
      {isLoginLoading && <Spinner />}
    </>
  );
}
