import SignUpLayout from "@/components/Layout/SignUpLayout/index";
import RegisterInfoForm from "@/components/page/student/RegisterInfo/Form/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function RegisterInfo() {
  return (
    <SignUpLayout
      title={
        <Txt size="h1" weight="semiBold">
          기본정보 등록하기
        </Txt>
      }
    >
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <RegisterInfoForm />
    </SignUpLayout>
  );
}
