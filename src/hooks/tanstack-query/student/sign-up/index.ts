import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { SignUpFormData } from "@/types/common/sign-up";
import { postStudentSignUp } from "@/apis/student/sign-up";
import { AxiosError } from "axios";

export const useStudentSignUp = () => {
  const router = useRouter();
  const { mutate } = useSignUpMutate();

  const onStudentSignUp = (formData: SignUpFormData) => {
    mutate(formData, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message);
      },
      onSuccess: () => {
        router.push(ROUTE.STUDENT.MAIN);
        alert("회원가입에 성공했습니다.");
      },
    });
  };
  return {
    onStudentSignUp,
  };
};

export const useSignUpMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, SignUpFormData>({
    mutationKey: ["studentSignUp"],
    mutationFn: postStudentSignUp,
  });
};
