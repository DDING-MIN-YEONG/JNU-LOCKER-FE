import classNames from "classnames/bind";
import styles from "@/components/common/DepartmentLabel/index.module.scss";

const cn = classNames.bind(styles);

interface DepartmentLabelProps {
  department: string;
  affiliation: string;
  labelClassName?: string;
}

export default function DepartmentLabel({ affiliation, department, labelClassName }: DepartmentLabelProps) {
  return <div className={cn("container", labelClassName)}>{`${affiliation} ${department}`}</div>;
}
