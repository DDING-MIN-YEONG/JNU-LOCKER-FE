"use client";

import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import useSignUp from "@/hooks/committee/sign-up/useSignUp";
import { Selector } from "@/components/common/Selector";
import { COMMITTEE_SIGN_UP_CATEGORY } from "@/constants/committee/sign-up";

const cn = classNames.bind(styles);

export default function SignUpForm() {
  const { formAction, formData, onChange, error, organizations, departments } = useSignUp();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <Txt weight="semiBold" className={cn("title")}>
        회원가입
      </Txt>
      <div className={cn("inputContainer")}>
        <Selector
          label="유형"
          onChange={onChange}
          options={COMMITTEE_SIGN_UP_CATEGORY}
          value={formData.category.value}
          id="category"
        />
        <Selector
          label="소속"
          onChange={onChange}
          options={organizations}
          value={formData.affiliation.value}
          id="affiliation"
        />
        <Selector
          label="학과"
          onChange={onChange}
          options={departments}
          value={formData.department.value}
          id="department"
        />
      </div>
      {error.isError && (
        <Txt size="tiny" color="error" className={cn("errorMessage")}>
          {error.errorMessage}
        </Txt>
      )}
      <div className={cn("btnContainer")}>
        <Button type="submit" className={cn("nextBtn")}>
          <Txt size="small" color="white" weight="medium">
            다음
          </Txt>
        </Button>
      </div>
    </form>
  );
}
