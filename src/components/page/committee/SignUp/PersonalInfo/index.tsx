import AuthorizationLayout from "@/components/Layout/committee/AuthorizationLayout";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import SignUpPersonalInfoForm from "@/components/page/committee/SignUp/PersonalInfo/Form/index";

const cn = classNames.bind(styles);

export default function SignUpPersonalInfo() {
  return (
    <AuthorizationLayout>
      <div className={cn("container")}>
        <SignUpPersonalInfoForm />
      </div>
    </AuthorizationLayout>
  );
}
