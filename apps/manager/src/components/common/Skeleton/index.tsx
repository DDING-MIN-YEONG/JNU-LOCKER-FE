import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface SkeletonProps {
  className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("container", className)}>
      <div className={cn("skeleton")} />
    </div>
  );
}
