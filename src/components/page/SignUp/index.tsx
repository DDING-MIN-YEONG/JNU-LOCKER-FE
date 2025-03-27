import classNames from "classnames/bind";
import styles from "@/components/page/SignUp/index.module.scss";

import SignUpForm from "@/components/page/SignUp/Form/index";
import SignUpLayout from "@/components/page/SignUp/Layout/index";
import ChnamLogo from "@/components/common/ChnamLogo";

const cn = classNames.bind(styles);

export default function SignUp() {
  return (
    <SignUpLayout title="회원가입">
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
