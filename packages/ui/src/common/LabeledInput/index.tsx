import classNames from "classnames/bind";
import { InputHTMLAttributes, ReactNode } from "react";
import Input from "../../design-system/Input";
import Label from "../../design-system/Label";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export interface LabeledInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size"> {
  id: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  label: string;
  size?: "small" | "medium" | "large";
  // Label props
  labelColor?: "primary" | "secondary" | "error" | "white" | "black";
  labelWeight?: "normal" | "medium" | "semiBold" | "bold";
  labelFontType?: "basic" | "chnam";
  required?: boolean;
  // Input props
  variant?: "default" | "outlined" | "filled";
  status?: "default" | "success" | "error" | "warning";
  // children을 받을 수 있도록 추가 (예: input 옆에 버튼 배치)
  children?: ReactNode;
}

export function LabeledInput({
  containerClassName,
  className,
  labelClassName,
  label,
  id,
  size = "medium",
  labelColor = "black",
  labelWeight = "medium",
  labelFontType = "basic",
  required = false,
  variant = "outlined",
  status = "default",
  children,
  ...props
}: LabeledInputProps) {
  return (
    <div className={cn("container", containerClassName)}>
      <Label
        htmlFor={id}
        className={labelClassName}
        size={size}
        color={labelColor}
        weight={labelWeight}
        fontType={labelFontType}
        required={required}
      >
        {label}
      </Label>
      <div className={cn("inputWrapper")}>
        <Input
          {...props}
          id={id}
          className={className}
          size={size}
          variant={variant}
          status={status}
          fullWidth={true}
        />
        {children && <div className={cn("children")}>{children}</div>}
      </div>
    </div>
  );
}
