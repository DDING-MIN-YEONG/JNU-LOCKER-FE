import classNames from "classnames/bind";
import { InputHTMLAttributes } from "react";
import Label from "../../design-system/Label";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export interface LabeledInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  className?: string;
  labelClassName?: string;
  labeledInputContainerClassName?: string;
  label: string;
  labelSize?: "small" | "medium" | "large";
  labelColor?: "primary" | "secondary" | "error" | "white" | "black";
  labelWeight?: "normal" | "medium" | "semiBold" | "bold";
  labelFontType?: "basic" | "chnam";
  required?: boolean;
}

export function LabeledInput({
  labeledInputContainerClassName,
  className,
  labelClassName,
  label,
  id,
  labelSize = "medium",
  labelColor = "black",
  labelWeight = "medium",
  labelFontType = "basic",
  required = false,
  ...props
}: LabeledInputProps) {
  return (
    <div className={cn("container", labeledInputContainerClassName)}>
      <Label
        htmlFor={id}
        className={labelClassName}
        size={labelSize}
        color={labelColor}
        weight={labelWeight}
        fontType={labelFontType}
        required={required}
      >
        {label}
      </Label>
      <input {...props} id={id} className={cn("input", className)} />
    </div>
  );
}
