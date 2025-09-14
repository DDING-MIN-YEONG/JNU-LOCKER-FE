import classNames from "classnames/bind";
import styles from "./index.module.scss";
import SignInForm from "@/components/page/Main/Form/index";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@repo/ui/design-system/Txt/index";

const cn = classNames.bind(styles);

export default function Main() {
  return (
    <div className={cn("container")}>
      <div className={cn("titleContainer")}>
        <Txt size="h1" fontType="chnam">
          전남대학교
        </Txt>
        <Txt weight="medium" className={cn("subTitle")}>
          사물함 신청 서비스
        </Txt>
      </div>
      <SignInForm />
      <div className={cn("linkContainer")}>
        <Link href={ROUTE.SIGN_UP}>
          <Txt size="small" className={cn("link")}>
            회원가입
          </Txt>
        </Link>
      </div>
    </div>
  );
}
