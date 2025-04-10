"use client";

import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import useCommitteeSignUpForm from "@/hooks/committee/sign-up/useCommitteeSignUpForm";
import { Selector } from "@/components/common/Selector";
import { COMMITTEE_SIGN_UP_CATEGORY } from "@/constants/committee/sign-up";
import TextInput from "@/components/common/TextInput";

const cn = classNames.bind(styles);

export default function SignUpForm() {
  const { formAction, formData, onSelectChange, error, organizations, departments, onInputChange } =
    useCommitteeSignUpForm();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <Txt weight="semiBold" className={cn("title")}>
        회원가입
      </Txt>
      <div className={cn("inputContainer")}>
        <Selector
          label="유형"
          onChange={onSelectChange}
          options={COMMITTEE_SIGN_UP_CATEGORY}
          value={formData.category.value}
          id="category"
        />
        <Selector
          label="소속"
          onChange={onSelectChange}
          options={organizations}
          value={formData.affiliation.value}
          id="affiliation"
        />
        <Selector
          label="학과"
          onChange={onSelectChange}
          options={departments}
          value={formData.department.value}
          id="department"
        />
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={formData.email}
          onChange={onInputChange}
        >
          <Button type="button" className={cn("emailBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              메일전송
            </Txt>
          </Button>
        </TextInput>
        <TextInput
          containerClassName={cn("certificationContainer")}
          id="emailCertificationNumber"
          type="text"
          label="이메일 인증코드"
          placeholder="이메일 인증코드를 입력해주세요."
          value={formData.emailCertificationNumber}
          onChange={onInputChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              인증하기
            </Txt>
          </Button>
        </TextInput>
        <TextInput
          containerClassName={cn("phoneNumberInputContainer")}
          id="phoneNumber"
          type="text"
          label="연락처"
          placeholder="연락처를 입력해주세요."
          value={formData.phoneNumber}
          onChange={onInputChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              전송
            </Txt>
          </Button>
        </TextInput>
        <TextInput
          containerClassName={cn("certificationContainer")}
          id="phoneNumberCertificationNumber"
          type="text"
          label="연락처 인증코드"
          placeholder="연락처 인증코드를 입력해주세요."
          value={formData.phoneNumberCertificationNumber}
          onChange={onInputChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              인증하기
            </Txt>
          </Button>
        </TextInput>
        <TextInput
          id="name"
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요."
          value={formData.name}
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
        <TextInput
          id="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          value={formData.passwordConfirm}
          onChange={onInputChange}
        />
      </div>
      {error.isError && (
        <Txt size="tiny" color="error" className={cn("errorMessage")}>
          {error.errorMessage}
        </Txt>
      )}
      <div className={cn("btnContainer")}>
        <Button type="submit" className={cn("completeBtn")}>
          <Txt size="small" color="white" weight="medium">
            완료
          </Txt>
        </Button>
      </div>
    </form>
  );
}
