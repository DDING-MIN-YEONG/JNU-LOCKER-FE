import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "white" | "black";
  weight?: "normal" | "medium" | "semiBold" | "bold";
  fontType?: "basic" | "chnam";
  required?: boolean;
}

export default function Label({
  children,
  htmlFor,
  className,
  size = "medium",
  color = "black",
  weight = "normal",
  fontType = "basic",
  required = false,
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn("label", size, color, weight, fontType, className)}>
      {children}
      {required && <span className={cn("required")}>*</span>}
    </label>
  );
}
