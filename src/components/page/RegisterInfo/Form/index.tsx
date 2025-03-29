"use client";

import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import classNames from "classnames/bind";
import styles from "@/components/page/RegisterInfo/Form/index.module.scss";

import useRegisterInfo from "@/hooks/sign-up/useRegisterInfo";

const cn = classNames.bind(styles);

export default function RegisterInfoForm() {
  const { formAction, formData, onChange, error, onPrevBtnClick } = useRegisterInfo();

  return (
    <form onSubmit={formAction} className={cn("form")}>
      <div className={cn("inputContainer")}>
        <TextInput
          id="name"
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={onChange}
        />
        <TextInput
          id="affiliation"
          type="text"
          label="소속대학"
          placeholder="소속대학을 입력해주세요."
          value={formData.affiliation}
          onChange={onChange}
        />
        <TextInput
          id="department"
          type="text"
          label="소속학과"
          placeholder="소속학과를 입력해주세요."
          value={formData.department}
          onChange={onChange}
        />
        <TextInput
          id="phoneNumber"
          type="text"
          label="전화번호"
          placeholder="전화번호를 입력해주세요."
          value={formData.phoneNumber}
          onChange={onChange}
        />
      </div>
      {error.isError && (
        <p role="alert" className={cn("errorMessage")}>
          {error.errorMessage}
        </p>
      )}
      <div className={cn("btnContainer")}>
        <Button color="white" onClick={onPrevBtnClick} type="button" className={cn("nextBtn")}>
          이전
        </Button>
        <Button type="submit" className={cn("nextBtn")}>
          완료
        </Button>
      </div>
    </form>
  );
}
