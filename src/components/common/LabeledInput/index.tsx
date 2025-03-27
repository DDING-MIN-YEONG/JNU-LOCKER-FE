import classNames from "classnames/bind";
import styles from "@/components/common/LabeledInput/index.module.scss";
import { InputHTMLAttributes } from "react";

const cn = classNames.bind(styles);

export interface LabeledInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  type: "text" | "password" | "email";
  className?: string;
  labelClassName?: string;
  labeledInputContainerClassName?: string;
  label: string;
}

export function LabeledInput({
  labeledInputContainerClassName,
  className,
  labelClassName,
  label,
  id,
  ...props
}: LabeledInputProps) {
  return (
    <div className={cn(labeledInputContainerClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
      </label>
      <input {...props} id={id} className={cn("input", className)} />
    </div>
  );
}
