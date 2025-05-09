import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import AffiliationLabel from "@/components/common/AffiliationLabel";

const cn = classNames.bind(styles);

interface DepartmentLayoutProps {
  affiliation: string;
  children: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
}

export default function AffiliationLayout({ affiliation, children, containerClassName }: DepartmentLayoutProps) {
  return (
    <div className={cn("container", containerClassName)}>
      <div className={cn("labelContainer")}>
        <AffiliationLabel affiliation={affiliation} labelClassName={cn("label")} />
      </div>
      {children}
    </div>
  );
}
