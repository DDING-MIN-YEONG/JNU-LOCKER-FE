"use client";

import { ROUTE } from "@/constants/routes";
import { isApiResponseError, isCorsError } from "@/functions/api";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const unauthorizedPage = ["/", "/sign-up", "/server-inspection"];
  const serverInspectionPage = ["/server-inspection"];

  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, error, data } = useGetMyInfo();

  const isUnauthorizedPage = unauthorizedPage.includes(pathname);
  const isServerInspectionPage = serverInspectionPage.includes(pathname);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // CORS 에러 처리
    if (isCorsError(error) && !isServerInspectionPage) {
      alert("서버 점검중입니다.");
      router.push(ROUTE.SERVER_INSPECTION);
      return;
    }

    // 일반적인 API 에러 처리
    if (isApiResponseError(error)) {
      const statusCode = error.response.status;

      // 인증이 필요한 페이지에서 401 에러가 발생한 경우 로그인 페이지로 리다이렉트
      if (statusCode === 401 && (!isUnauthorizedPage || isServerInspectionPage)) {
        alert("로그인 후 이용해주세요.");
        router.push(ROUTE.MAIN);
      }
    }

    // 인증이 필요없는 페이지에서 200 응답이 발생하면 apply-list 페이지로 리다이렉트
    if (data && data.status === 200 && isUnauthorizedPage) {
      router.push(ROUTE.APPLY_LIST);
    }
  }, [isLoading, router]);

  if (isLoading) {
    return null;
  }

  // CORS 에러가 발생한 경우
  if (isCorsError(error) && !isServerInspectionPage) {
    return null;
  }

  // API 에러가 발생한 경우
  if (isApiResponseError(error)) {
    const statusCode = error.response.status;

    if (statusCode === 401 && (!isUnauthorizedPage || isServerInspectionPage)) {
      return null;
    }
  }

  if (data && data.status === 200 && isUnauthorizedPage) {
    return null;
  }

  return <>{children}</>;
}
