import classNames from "classnames/bind";
import styles from "@/components/page/SignUp/index.module.scss";
import ChnamLogo from "@/images/chnam_logo.svg";
import Image from "next/image";

import SignUpForm from "@/components/page/SignUp/Form/index";
import SignUpLayout from "@/components/page/SignUp/Layout/index";

const cn = classNames.bind(styles);

export default function SignUp() {
  return (
    <SignUpLayout title="회원가입">
      <div className={cn("imgContainer")}>
        <Image src={ChnamLogo} alt="전남대학교 로고" />
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
