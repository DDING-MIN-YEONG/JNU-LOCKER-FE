import { useRouter } from "next/navigation";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import { useEffect } from "react";
import { ROUTE } from "@/constants/routes";

export const useStudentMyInfo = () => {
  const router = useRouter();
  const { data, isPending, isError, error } = useGetMyInfo();

  useEffect(() => {
    if (isError && error.response.status === 401) {
      alert("로그인 후 이용해주세요.");
      router.push(ROUTE.MAIN);
    }
  }, [isError, error, router]);

  return { data, isPending, isError };
};
