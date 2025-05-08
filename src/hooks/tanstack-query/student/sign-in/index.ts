import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { AxiosError } from "axios";
import { SignInFormData } from "@/types/common/sign-in";
import { postSignIn } from "@/apis/common/sign-in";

export const useStudentSignIn = () => {
  const router = useRouter();
  const { mutate } = useStudentSignInMutate();
  const queryClient = useQueryClient();

  const onStudentSignIn = (formData: SignInFormData) => {
    mutate(formData, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message || "로그인에 실패했습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["myInfo"] });
        router.push(ROUTE.STUDENT.DEPARTMENT_INFO);
        alert("로그인에 성공했습니다.");
      },
    });
  };
  return {
    onStudentSignIn,
  };
};

export const useStudentSignInMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, SignInFormData>({
    mutationKey: ["studentSignIn"],
    mutationFn: postSignIn,
  });
};
