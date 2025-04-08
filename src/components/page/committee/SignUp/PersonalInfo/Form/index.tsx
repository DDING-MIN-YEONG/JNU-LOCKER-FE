"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/design-system/Button";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";
import usePersonalInfo from "@/hooks/committee/sign-up/usePersonalInfo";

const cn = classNames.bind(styles);

export default function SignUpPersonalInfoForm() {
  const { formAction, formData, onChange, error } = usePersonalInfo();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <Txt weight="semiBold" className={cn("title")}>
        회원가입
      </Txt>
      <div className={cn("inputContainer")}>
        <TextInput
          containerClassName={cn("emailInputContainer")}
          id="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={formData.email}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              인증하기
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
          onChange={onChange}
        >
          <Button type="button" className={cn("certificationBtn")}>
            <Txt size="tiny" weight="bold" color="white">
              메일전송
            </Txt>
          </Button>
        </TextInput>
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
        <Txt size="tiny" color="error" className={cn("errorMessage")}>
          {error.errorMessage}
        </Txt>
      )}
      <div className={cn("btnContainer")}>
        <Button className={cn("prevBtn")} color="white">
          <Txt size="small" weight="medium">
            이전
          </Txt>
        </Button>
        <Button type="submit" className={cn("nextBtn")}>
          <Txt size="small" color="white" weight="medium">
            다음
          </Txt>
        </Button>
      </div>
    </form>
  );
}
