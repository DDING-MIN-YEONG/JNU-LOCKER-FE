import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { SelectHTMLAttributes } from "react";

const cn = classNames.bind(styles);

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    id: number;
    value: string;
  }[];
  value: string;
  labelClassName?: string;
}

export function Selector({ label, options, value, labelClassName, ...props }: SelectorProps) {
  return (
    <div className={cn("container")}>
      <label htmlFor={props.id} className={cn("label", labelClassName)}>
        {label}
      </label>
      <select value={value} {...props} id={props.id} className={cn("select")}>
        {options.map((options) => (
          <option key={options.id} value={options.value} data-id={options.id}>
            {options.value}
          </option>
        ))}
      </select>
    </div>
  );
}
