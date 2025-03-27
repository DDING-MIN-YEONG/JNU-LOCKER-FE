import classNames from "classnames/bind";
import styles from "@/components/common/ApplyHeader/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function ApplyHeader() {
  return (
    <header className={cn("header")}>
      <Link href={ROUTE.MAIN} className={cn("logo")}>
        JNU-Locker
      </Link>
    </header>
  );
}
