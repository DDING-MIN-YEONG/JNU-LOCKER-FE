import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { SignInFormData } from "@/types/common/sign-in";
import { postSignIn } from "@/apis/common/sign-in";
import { ApiResponseError } from "@/types/common/api";
import { LoginInfo } from "@/apis/dtos/common/my-info";

export const useCommitteeSignIn = () => {
  const router = useRouter();
  const { mutate, isPending } = useCommitteeSignInMutate();
  const queryClient = useQueryClient();

  const onCommitteeSignIn = (formData: SignInFormData) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "로그인에 실패했습니다.");
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["myInfo"] });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        router.push(ROUTE.APPLY_LIST);
        alert("로그인에 성공했습니다.");
      },
    });
  };
  return {
    onCommitteeSignIn,
    isLoginLoading: isPending,
  };
};

export const useCommitteeSignInMutate = () => {
  return useMutation<LoginInfo, ApiResponseError, SignInFormData>({
    mutationKey: ["committeeSignIn"],
    mutationFn: postSignIn,
  });
};
