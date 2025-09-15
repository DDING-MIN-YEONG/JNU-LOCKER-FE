import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { postStudentSignUp } from "@/apis/sign-up";
import { StudentSignUpFormData } from "@/types/sign-up";
import { ApiResponseError } from "@/types/common/api";

export const useStudentSignUp = () => {
  const router = useRouter();
  const { mutate, isPending } = useSignUpMutate();

  const onStudentSignUp = (formData: StudentSignUpFormData) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "회원가입에 실패했습니다.");
      },
      onSuccess: () => {
        router.push(ROUTE.MAIN);
        alert("회원가입에 성공했습니다.");
      },
    });
  };
  return {
    onStudentSignUp,
    isSignUpLoading: isPending,
  };
};

export const useSignUpMutate = () => {
  return useMutation<void, ApiResponseError, StudentSignUpFormData>({
    mutationKey: ["studentSignUp"],
    mutationFn: postStudentSignUp,
  });
};
