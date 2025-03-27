import classNames from "classnames/bind";
import styles from "@/components/common/Button/index.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

const cn = classNames.bind(styles);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  color?: "white" | "primary";
}

export default function Button({ color = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn("button", className, color)} {...props}>
      {children}
    </button>
  );
}
