import classNames from "classnames/bind";
import styles from "@/components/page/Main/index.module.scss";
import SignInForm from "@/components/page/Main/Form/index";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function Main() {
  return (
    <div className={cn("container")}>
      <div className={cn("titleContainer")}>
        <p className={cn("title")}>전남대학교</p>
        <p className={cn("subTitle")}>사물함 신청 서비스</p>
      </div>
      <SignInForm />
      <div className={cn("linkContainer")}>
        <Link href={ROUTE.SIGN_UP}>회원가입</Link>
        <Link href={ROUTE.SIGN_UP}>비밀번호 재설정</Link>
      </div>
    </div>
  );
}
