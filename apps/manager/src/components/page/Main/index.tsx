import AuthorizationLayout from "@/components/Layout/AuthorizationLayout";
import CommitteeSignInForm from "@/components/page/Main/Form";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function MainPage() {
  return (
    <AuthorizationLayout>
      <div className={cn("container")}>
        <CommitteeSignInForm />
      </div>
    </AuthorizationLayout>
  );
}
