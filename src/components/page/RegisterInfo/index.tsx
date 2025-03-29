import SignUpLayout from "@/components/page/SignUp/Layout/index";
import RegisterInfoForm from "@/components/page/RegisterInfo/Form/index";
import ChnamLogo from "@/components/common/ChnamLogo";
import classNames from "classnames/bind";
import styles from "@/components/page/RegisterInfo/index.module.scss";

const cn = classNames.bind(styles);

export default function RegisterInfo() {
  return (
    <SignUpLayout title="기본정보 등록하기">
      <div className={cn("imgContainer")}>
        <ChnamLogo width={103} height={98} />
      </div>
      <RegisterInfoForm />
    </SignUpLayout>
  );
}
