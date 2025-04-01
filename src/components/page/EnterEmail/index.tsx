import classNames from "classnames/bind";
import styles from "@/components/page/EnterEmail/index.module.scss";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import EnterEmailForm from "@/components/page/EnterEmail/Form/index";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function EnterEmail() {
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
      <Txt weight="bold" size="h4">
        재설정하고자 하는 이메일을 입력주세요.
      </Txt>
      <EnterEmailForm />
    </SignUpLayout>
  );
}
