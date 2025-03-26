import classNames from "classnames/bind";
import styles from "@/components/common/Header/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cn("header")}>
      <Link href={ROUTE.MAIN} className={cn("logo")}>
        JNU-Locker
      </Link>
    </header>
  );
}
