import classNames from "classnames/bind";
import styles from "@/components/page/SignUp/Layout/index.module.scss";
import { ReactNode } from "react";

const cn = classNames.bind(styles);

interface SignUpLayoutProps {
  title: string;
  children?: ReactNode;
}

export default function SignUpLayout({ title, children }: SignUpLayoutProps) {
  return (
    <div className={cn("container")}>
      <p className={cn("title")}>{title}</p>
      {children}
    </div>
  );
}
