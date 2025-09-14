import ApplyHeader from "@/components/common/ApplyHeader";
import Main from "@/components/page/Main";

export default function Home() {
  return (
    <>
      <ApplyHeader showLogoutButton={false} />
      <Main />
    </>
  );
}
