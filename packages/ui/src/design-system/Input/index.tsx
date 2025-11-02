import classNames from "classnames/bind";
import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outlined" | "filled";
  status?: "default" | "success" | "error" | "warning";
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size = "medium", variant = "outlined", status = "default", fullWidth = true, disabled, ...props },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          "input",
          size,
          variant,
          status,
          {
            fullWidth,
            disabled,
          },
          className,
        )}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
