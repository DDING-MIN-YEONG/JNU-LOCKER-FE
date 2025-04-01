import classNames from "classnames/bind";
import styles from "@/components/common/ApplyHeader/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function ApplyHeader() {
  return (
    <header className={cn("header")}>
      <Link href={ROUTE.MAIN} className={cn("logo")}>
        <Txt size="h2" fontType="chnam" color="white">
          JNU-Locker
        </Txt>
      </Link>
    </header>
  );
}
