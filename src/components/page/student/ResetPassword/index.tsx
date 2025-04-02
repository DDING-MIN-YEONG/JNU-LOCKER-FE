import classNames from "classnames/bind";
import styles from "./index.module.scss";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import ResetPasswordForm from "@/components/page/student/ResetPassword/Form/index";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function ResetPassword() {
  return (
    <SignUpLayout
      title={
        <Txt size="h1" weight="semiBold">
          비밀번호 재설정
        </Txt>
      }
    >
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <ResetPasswordForm />
    </SignUpLayout>
  );
}
