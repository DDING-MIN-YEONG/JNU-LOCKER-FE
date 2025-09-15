import ApplyHeader from "@/components/common/ApplyHeader";
import SignUp from "@/components/page/SignUp/index";

export default function SignUpPage() {
  return (
    <>
      <ApplyHeader showLogoutButton={false} />
      <SignUp />
    </>
  );
}
