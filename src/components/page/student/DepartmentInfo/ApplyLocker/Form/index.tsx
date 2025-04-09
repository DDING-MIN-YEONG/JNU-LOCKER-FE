"use client";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import TextInput from "@/components/common/TextInput";
import useApplyLocker from "@/hooks/apply-locker/useApplyLocker";
import Button from "@/components/design-system/Button";
import Txt from "@/components/design-system/Txt";

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
        <Txt size="tiny" color="error" className={cn("errorMessage")}>
          {error.errorMessage}
        </Txt>
      )}
      <div className={cn("btnContainer")}>
        <Button onClick={onSaveBtnClick} color="gray" className={cn("saveBtn")}>
          <Txt size="h6" weight="semiBold" className={cn("save")}>
            임시 저장
          </Txt>
        </Button>
        <Button onClick={onApplyBtnClick} className={cn("applyBtn")}>
          <Txt size="h6" weight="semiBold" color="white" className={cn("apply")}>
            신청하기
          </Txt>
        </Button>
      </div>
    </div>
  );
}
