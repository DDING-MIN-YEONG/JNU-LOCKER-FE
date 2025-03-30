import classNames from "classnames/bind";
import styles from "@/components/Layout/DepartmentLayout/index.module.scss";
import { ReactNode } from "react";
import DepartmentLabel from "@/components/common/DepartmentLabel";

const cn = classNames.bind(styles);

interface DepartmentLayoutProps {
  department: string;
  affiliation: string;
  children: ReactNode;
}

export default function DepartmentLayout({ affiliation, department, children }: DepartmentLayoutProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("labelContainer")}>
        <DepartmentLabel affiliation={affiliation} department={department} />
      </div>
      {children}
    </div>
  );
}
