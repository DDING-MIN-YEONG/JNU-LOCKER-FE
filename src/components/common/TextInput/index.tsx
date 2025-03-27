import classNames from "classnames/bind";
import styles from "@/components/common/TextInput/index.module.scss";
import { LabeledInput, LabeledInputProps } from "@/components/common/LabeledInput";
import { ReactNode } from "react";

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
