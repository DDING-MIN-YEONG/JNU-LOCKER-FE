import classNames from "classnames/bind";
import styles from "./index.module.scss";

import SignUpForm from "@/components/page/student/SignUp/Form/index";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import Logo from "@/components/common/Logo";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function SignUp() {
  return (
    <SignUpLayout
      title={
        <Txt size="h1" weight="semiBold">
          회원가입
        </Txt>
      }
    >
      <div className={cn("imgContainer")}>
        <Logo width={500} height={300} />
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
