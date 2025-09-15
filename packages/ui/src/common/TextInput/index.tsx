import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import { LabeledInput, LabeledInputProps } from "../LabeledInput";

const cn = classNames.bind(styles);

interface TextInputProps extends LabeledInputProps {
  containerClassName?: string;
  children?: ReactNode;
}

export default function TextInput({ containerClassName, children, ...props }: TextInputProps) {
  return (
    <div className={cn(containerClassName, "container")}>
      <LabeledInput labeledInputContainerClassName={cn("labeledInputContainer")} {...props} />
      {children}
    </div>
  );
}
