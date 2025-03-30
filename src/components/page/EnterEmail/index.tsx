import classNames from "classnames/bind";
import styles from "@/components/page/EnterEmail/index.module.scss";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import EnterEmailForm from "@/components/page/EnterEmail/Form/index";

const cn = classNames.bind(styles);

export default function EnterEmail() {
  return (
    <SignUpLayout title="비밀번호 재설정">
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <p className={cn("title")}>재설정하고자 하는 이메일을 입력주세요.</p>
      <EnterEmailForm />
    </SignUpLayout>
  );
}
