import classNames from "classnames/bind";
import styles from "@/components/page/ResetPassword/index.module.scss";
import SignUpLayout from "@/components/page/SignUp/Layout/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import ResetPasswordForm from "@/components/page/ResetPassword/Form/index";

const cn = classNames.bind(styles);

export default function ResetPassword() {
  return (
    <SignUpLayout title="비밀번호 재설정">
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <ResetPasswordForm />
    </SignUpLayout>
  );
}
