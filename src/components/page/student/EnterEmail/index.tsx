import classNames from "classnames/bind";
import styles from "./index.module.scss";
import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import Logo from "@/components/common/Logo";
import EnterEmailForm from "@/components/page/student/EnterEmail/Form/index";
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
        <Logo width={500} height={300} />
      </div>
      <Txt weight="bold" size="h4">
        재설정하고자 하는 이메일을 입력주세요.
      </Txt>
      <EnterEmailForm />
    </SignUpLayout>
  );
}
