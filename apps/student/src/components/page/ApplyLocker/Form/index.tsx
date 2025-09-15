"use client";

import Spinner from "@repo/ui/common/Spinner/index";
import TextInput from "@repo/ui/common/TextInput/index";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import { ChangeEvent, FormEvent } from "react";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface ApplyLockerFormProps {
  formAction: (e: FormEvent<HTMLFormElement>) => void;
  formData: { lockerNumber: string; floor: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { isError: boolean; errorMessage: string };
  isApplyLockerLoading: boolean;
}

export default function ApplyLockerForm({
  formAction,
  formData,
  onChange,
  error,
  isApplyLockerLoading,
}: ApplyLockerFormProps) {
  return (
    <>
      <form className={cn("container")} onSubmit={formAction}>
        <TextInput
          id="floor"
          type="text"
          label="층수"
          placeholder="층수를 입력해주세요. (숫자만 입력 가능)"
          value={formData.floor}
          onChange={onChange}
          labelClassName={cn("label")}
          className={cn("input")}
        />
        <TextInput
          id="lockerNumber"
          type="text"
          label="사물함 번호"
          placeholder="사물함 번호를 입력해주세요."
          value={formData.lockerNumber}
          onChange={onChange}
          labelClassName={cn("label")}
          className={cn("input")}
        />
        {error.isError && (
          <Txt size="tiny" color="error" className={cn("errorMessage")}>
            {error.errorMessage}
          </Txt>
        )}
        <div className={cn("btnContainer")}>
          <Button type="submit" className={cn("applyBtn")} disabled={isApplyLockerLoading}>
            <Txt size="h6" weight="semiBold" color="white" className={cn("apply")}>
              신청하기
            </Txt>
          </Button>
        </div>
      </form>
      {isApplyLockerLoading && <Spinner />}
    </>
  );
}
