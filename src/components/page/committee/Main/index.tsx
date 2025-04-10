import AuthorizationLayout from "@/components/Layout/committee/AuthorizationLayout";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import CommitteeSignInForm from "@/components/page/committee/Main/Form";

const cn = classNames.bind(styles);

export default function CommitteeMain() {
  return (
    <AuthorizationLayout>
      <div className={cn("container")}>
        <CommitteeSignInForm />
      </div>
    </AuthorizationLayout>
  );
}
