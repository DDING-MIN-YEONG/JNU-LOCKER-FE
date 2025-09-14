import ApplyHeader from "@/components/common/ApplyHeader";
import SignUp from "@/components/page/student/SignUp";

export default function SignUpPage() {
  return (
    <>
      <ApplyHeader showLogoutButton={false} />
      <SignUp />
    </>
  );
}
