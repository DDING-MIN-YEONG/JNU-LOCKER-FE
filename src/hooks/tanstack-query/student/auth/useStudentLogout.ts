import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { ApiResponseError } from "@/types/common/api";
import { postLogout } from "@/apis/common/my-info";

export const useStudentLogout = () => {
  const router = useRouter();
  const { mutate, isPending } = useStudentLogoutMutate();
  const queryClient = useQueryClient();

  const onStudentLogout = () => {
    mutate(undefined, {
      onError: (error) => {
        alert(error.response.data.message || "로그아웃에 실패했습니다.");
      },
      onSuccess: () => {
        queryClient.clear();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push(ROUTE.STUDENT.MAIN);
        alert("로그아웃에 성공했습니다.");
      },
    });
  };
  return {
    onStudentLogout,
    isLogoutLoading: isPending,
  };
};

export const useStudentLogoutMutate = () => {
  return useMutation<void, ApiResponseError>({
    mutationKey: ["studentLogout"],
    mutationFn: postLogout,
  });
};
