"use client";

import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/Form/index.module.scss";
import TextInput from "@/components/common/TextInput";
import useApplyLocker from "@/hooks/apply-locker/useApplyLocker";
import Button from "@/components/design-system/Button";

const cn = classNames.bind(styles);

export default function ApplyLockerForm() {
  const { onApplyBtnClick, onSaveBtnClick, formData, onChange, error } = useApplyLocker();

  return (
    <div className={cn("container")}>
      <TextInput
        id="firstPriority"
        type="text"
        label="1순위"
        placeholder="1순위 사물함을 입력해주세요."
        value={formData.firstPriority}
        onChange={onChange}
        labelClassName={cn("label")}
        className={cn("input")}
      />
      <TextInput
        id="secondPriority"
        type="text"
        label="2순위"
        placeholder="2순위 사물함을 입력해주세요."
        value={formData.secondPriority}
        onChange={onChange}
        labelClassName={cn("label")}
        className={cn("input")}
      />
      <TextInput
        id="thirdPriority"
        type="text"
        label="3순위"
        placeholder="3순위 사물함을 입력해주세요."
        value={formData.thirdPriority}
        onChange={onChange}
        labelClassName={cn("label")}
        className={cn("input")}
      />
      {error.isError && (
        <p role="alert" className={cn("errorMessage")}>
          {error.errorMessage}
        </p>
      )}
      <div className={cn("btnContainer")}>
        <Button onClick={onSaveBtnClick} color="gray" className={cn("saveBtn")}>
          임시저장
        </Button>
        <Button onClick={onApplyBtnClick} className={cn("applyBtn")}>
          신청하기
        </Button>
      </div>
    </div>
  );
}
