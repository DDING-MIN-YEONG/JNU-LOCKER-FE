import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import StudentLogo from "@/components/common/StudentLogo";

const cn = classNames.bind(styles);

export default function ApplyHeader() {
  return (
    <header className={cn("header")}>
      <Link href={ROUTE.STUDENT.MAIN}>
        <StudentLogo width={100} height={50} />
      </Link>
    </header>
  );
}
