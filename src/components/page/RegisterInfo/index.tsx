import SignUpLayout from "@/components/page/SignUp/Layout/index";
import RegisterInfoForm from "@/components/page/RegisterInfo/Form/index";

export default function RegisterInfo() {
  return (
    <SignUpLayout title="기본정보 등록하기">
      <RegisterInfoForm />
    </SignUpLayout>
  );
}
