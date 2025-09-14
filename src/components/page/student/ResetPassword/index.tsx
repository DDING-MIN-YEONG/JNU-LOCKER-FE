import classNames from "classnames/bind";
import styles from "./index.module.scss";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import Logo from "@/components/common/Logo";
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
        <Logo width={500} height={300} />
      </div>
      <ResetPasswordForm />
    </SignUpLayout>
  );
}
