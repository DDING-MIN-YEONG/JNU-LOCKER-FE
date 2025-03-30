import classNames from "classnames/bind";
import styles from "@/components/common/DepartmentLabel/index.module.scss";

const cn = classNames.bind(styles);

interface DepartmentLabelProps {
  department: string;
  affiliation: string;
}

export default function DepartmentLabel({ affiliation, department }: DepartmentLabelProps) {
  return <div className={cn("container")}>{`${affiliation} ${department}`}</div>;
}
