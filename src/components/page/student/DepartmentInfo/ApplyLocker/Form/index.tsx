"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import useApplyLocker from "@/hooks/student/apply-locker/useApplyLocker";
import Button from "@/components/design-system/Button";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function ApplyLockerForm() {
  const { formAction, formData, onChange, error } = useApplyLocker();

  return (
    <form className={cn("container")} onSubmit={formAction}>
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
        <Button type="submit" className={cn("applyBtn")}>
          <Txt size="h6" weight="semiBold" color="white" className={cn("apply")}>
            신청하기
          </Txt>
        </Button>
      </div>
    </form>
  );
}
