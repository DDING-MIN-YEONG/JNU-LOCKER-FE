import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { TextareaHTMLAttributes } from "react";

const cn = classNames.bind(styles);

export interface LabeledTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  id: string;
  textareaClassName?: string;
  labelClassName?: string;
  labeledTextareaContainerClassName?: string;
  label: string;
}

export function LabeledTextarea({
  labeledTextareaContainerClassName,
  textareaClassName,
  labelClassName,
  label,
  id,
  ...props
}: LabeledTextareaProps) {
  return (
    <div className={cn("container", labeledTextareaContainerClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
      </label>
      <textarea {...props} id={id} className={cn("textarea", textareaClassName)} />
    </div>
  );
}
