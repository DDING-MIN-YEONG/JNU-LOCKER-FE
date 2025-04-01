import classNames from "classnames/bind";
import styles from "@/components/common/DepartmentLabel/index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

interface DepartmentLabelProps {
  department: string;
  affiliation: string;
  labelClassName?: string;
}

export default function DepartmentLabel({ affiliation, department, labelClassName }: DepartmentLabelProps) {
  return (
    <div className={cn("container", labelClassName)}>
      <Txt color="white" weight="medium" size="h4">{`${affiliation} ${department}`}</Txt>
    </div>
  );
}
