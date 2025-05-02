import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { postStudentSignUp } from "@/apis/student/sign-up";
import { AxiosError } from "axios";
import { StudentSignUpFormData } from "@/types/student/sign-up";

export const useStudentSignUp = () => {
  const router = useRouter();
  const { mutate } = useSignUpMutate();

  const onStudentSignUp = (formData: StudentSignUpFormData) => {
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
  return useMutation<void, AxiosError<{ message: string }>, StudentSignUpFormData>({
    mutationKey: ["studentSignUp"],
    mutationFn: postStudentSignUp,
  });
};
