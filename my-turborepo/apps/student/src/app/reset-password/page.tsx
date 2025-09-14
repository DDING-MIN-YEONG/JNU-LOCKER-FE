import ApplyHeader from "@/components/common/ApplyHeader";
import ResetPassword from "@/components/page/ResetPassword";

export default function ResetPasswordPage() {
  return (
    <>
      <ApplyHeader showLogoutButton={false} />
      <ResetPassword />
    </>
  );
}
