import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@repo/ui/design-system/Txt/index";

const cn = classNames.bind(styles);

interface DepartmentLabelProps {
  affiliation: string;
  labelClassName?: string;
}

export default function AffiliationLabel({ affiliation, labelClassName }: DepartmentLabelProps) {
  return (
    <div className={cn("container", labelClassName)}>
      <Txt color="white" weight="medium" size="h4">
        {affiliation}
      </Txt>
    </div>
  );
}
