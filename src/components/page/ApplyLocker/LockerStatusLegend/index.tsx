import classNames from "classnames/bind";
import styles from "@/components/page/ApplyLocker/LockerStatusLegend/index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function LockerStatusLegend() {
  return (
    <div className={cn("container")}>
      <div className={cn("legendContainer")}>
        <div className={cn("completeColor")} />
        <Txt size="small" weight="medium" className={cn("legend")}>
          신청 완료 사물함
        </Txt>
      </div>
      <div className={cn("legendContainer")}>
        <div className={cn("applyAbleColor")} />
        <Txt size="small" weight="medium" className={cn("legend")}>
          신청 가능 사물함
        </Txt>
      </div>
    </div>
  );
}
