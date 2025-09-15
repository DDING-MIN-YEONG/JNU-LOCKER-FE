import LeftArrow from "@/icons/LeftArrow.svg";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useBack } from "@/hooks/common/useBack";

const cn = classNames.bind(styles);

export default function LeftArrowBtn() {
  const { handleBack } = useBack();

  return (
    <button className={cn("backButton")} onClick={handleBack}>
      <Image src={LeftArrow} alt="뒤로가기" />
    </button>
  );
}
