import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";
import ChnamLogo from "@/components/common/ChnamLogo/index";

const cn = classNames.bind(styles);

export default function CommitteeHeader() {
  return (
    <header className={cn("header")}>
      <Link href={ROUTE.COMMITTEE.MAIN} className={cn("logo")}>
        <ChnamLogo height={58} width={61} />
        <Txt fontType="chnam" className={cn("headerTitle")}>
          전남대학교 사물함 신청 서비스
        </Txt>
      </Link>
      <Link href={ROUTE.COMMITTEE.APPLY_LIST}>
        <Txt className={cn("headerTitle")} weight="medium">
          신청 목록
        </Txt>
      </Link>
      <Link href={ROUTE.COMMITTEE.ANNOUNCEMENT}>
        <Txt className={cn("headerTitle")} weight="medium">
          공지사항
        </Txt>
      </Link>
      <Link href={ROUTE.COMMITTEE.EVENT}>
        <Txt className={cn("headerTitle")} weight="medium">
          이벤트
        </Txt>
      </Link>
    </header>
  );
}
