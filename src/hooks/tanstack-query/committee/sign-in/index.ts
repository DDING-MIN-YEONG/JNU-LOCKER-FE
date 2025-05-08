import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { AxiosError } from "axios";
import { SignInFormData } from "@/types/common/sign-in";
import { postSignIn } from "@/apis/common/sign-in";

export const useCommitteeSignIn = () => {
  const router = useRouter();
  const { mutate } = useCommitteeSignInMutate();
  const queryClient = useQueryClient();

  const onCommitteeSignIn = (formData: SignInFormData) => {
    mutate(formData, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message || "로그인에 실패했습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["myInfo"] });
        router.push(ROUTE.COMMITTEE.APPLY_LIST);
        alert("로그인에 성공했습니다.");
      },
    });
  };
  return {
    onCommitteeSignIn,
  };
};

export const useCommitteeSignInMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, SignInFormData>({
    mutationKey: ["committeeSignIn"],
    mutationFn: postSignIn,
  });
};
