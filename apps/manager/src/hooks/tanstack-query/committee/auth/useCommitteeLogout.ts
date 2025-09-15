import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { ApiResponseError } from "@/types/common/api";
import { postLogout } from "@/apis/common/my-info";

export const useCommitteeLogout = () => {
  const router = useRouter();
  const { mutate, isPending } = useCommitteeLogoutMutate();
  const queryClient = useQueryClient();

  const onCommitteeLogout = () => {
    mutate(undefined, {
      onError: (error) => {
        alert(error.response.data.message || "로그아웃에 실패했습니다.");
      },
      onSuccess: () => {
        queryClient.clear();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push(ROUTE.MAIN);
        alert("로그아웃에 성공했습니다.");
      },
    });
  };
  return {
    onCommitteeLogout,
    isLogoutLoading: isPending,
  };
};

export const useCommitteeLogoutMutate = () => {
  return useMutation<void, ApiResponseError>({
    mutationKey: ["committeeLogout"],
    mutationFn: postLogout,
  });
};
