import classNames from "classnames/bind";

import SpinnerPortal from "../SpinnerPortal";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function Spinner() {
  return (
    <SpinnerPortal>
      <div className={cn("container")}>
        <div className={cn("loader")}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </SpinnerPortal>
  );
}
