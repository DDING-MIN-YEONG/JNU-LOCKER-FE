import AuthorizationLayout from "@/components/Layout/AuthorizationLayout";
import SignUpForm from "@/components/page/SignUp/Form/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function CommitteeSignUp() {
  return (
    <AuthorizationLayout>
      <div className={cn("container")}>
        <SignUpForm />
      </div>
    </AuthorizationLayout>
  );
}
