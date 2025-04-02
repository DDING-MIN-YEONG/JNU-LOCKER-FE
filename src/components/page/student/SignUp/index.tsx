import classNames from "classnames/bind";
import styles from "./index.module.scss";

import SignUpForm from "@/components/page/student/SignUp/Form/index";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import ChnamLogo from "@/components/common/ChnamLogo";
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
        <ChnamLogo width={103} height={98} />
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
