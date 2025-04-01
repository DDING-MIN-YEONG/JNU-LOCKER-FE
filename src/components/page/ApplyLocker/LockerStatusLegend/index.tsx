import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/LockerStatusLegend/index.module.scss";

const cn = classNames.bind(styles);

export default function LockerStatusLegend() {
  return (
    <div className={cn("container")}>
      <div className={cn("legendContainer")}>
        <div className={cn("completeColor")} />
        <p>신청 완료 사물함</p>
      </div>
      <div className={cn("legendContainer")}>
        <div className={cn("applyAbleColor")} />
        <p>신청 가능 사물함</p>
      </div>
    </div>
  );
}
