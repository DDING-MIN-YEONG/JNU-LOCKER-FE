import { useRouter } from "next/navigation";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import { useEffect } from "react";
import { ROUTE } from "@/constants/routes";
import { REFRESH_TOKEN_ERROR_MESSAGE } from "@/constants/axios";
import { ApiResponseErrorWithMessage } from "@/types/common/api";

export const useStudentMyInfo = () => {
  const router = useRouter();
  const { data, isPending, isError, error } = useGetMyInfo();

  useEffect(() => {
    if (isError && (error as ApiResponseErrorWithMessage)?.message === REFRESH_TOKEN_ERROR_MESSAGE) {
      alert("로그인 후 이용해주세요.");
      router.push(ROUTE.STUDENT.MAIN);
    }
  }, [isError, error, router]);

  return { data, isPending, isError };
};
