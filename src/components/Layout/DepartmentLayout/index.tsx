import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import DepartmentLabel from "@/components/common/DepartmentLabel";

const cn = classNames.bind(styles);

interface DepartmentLayoutProps {
  affiliation: string;
  children: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
}

export default function DepartmentLayout({ affiliation, children, containerClassName }: DepartmentLayoutProps) {
  return (
    <div className={cn("container", containerClassName)}>
      <div className={cn("labelContainer")}>
        <DepartmentLabel affiliation={affiliation} labelClassName={cn("label")} />
      </div>
      {children}
    </div>
  );
}
