import classNames from "classnames/bind";
import styles from "@/components/design-system/Txt/index.module.scss";
import { ReactNode } from "react";

const cn = classNames.bind(styles);

interface TxtProps {
  children: ReactNode;
  className?: string;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "tiny";
  color?: "primary" | "error" | "white" | "black";
  weight?: "normal" | "medium" | "semiBold" | "bold";
  fontType?: "basic" | "chnam";
}

export default function Txt({
  children,
  className,
  color = "black",
  fontType = "basic",
  size,
  weight = "normal",
}: TxtProps) {
  return <span className={cn(size, color, fontType, weight, className)}>{children}</span>;
}
