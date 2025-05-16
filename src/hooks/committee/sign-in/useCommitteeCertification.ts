import { ROUTE } from "@/constants/routes";
import { ApiResponseError } from "@/types/common/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useCommitteeCertification = (isError: boolean, error: ApiResponseError) => {
  const router = useRouter();

  useEffect(() => {
    if (isError && error.response.status === 401) {
      router.push(ROUTE.COMMITTEE.MAIN);
      alert("로그인 후 이용해주세요.");
    }

    if (isError && error.response.status === 403) {
      router.push(ROUTE.COMMITTEE.MAIN);
      alert("권한이 없습니다.");
    }
  }, [isError, error, router]);
};
