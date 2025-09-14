import classNames from "classnames/bind";
import styles from "./index.module.scss";

import SignUpForm from "@/components/page/SignUp/Form/index";
import Logo from "@/components/common/Logo";
import Txt from "@repo/ui/design-system/Txt/index";
import SignUpLayout from "@/components/Layout/SignUpLayout";

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
        <Logo width={250} height={116} />
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
