import { useMutation } from "@tanstack/react-query";
import { postCommitteeSignUp } from "@/apis/committee/sign-up";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { AxiosError } from "axios";
import { CommitteeSignUpFormData } from "@/types/committee/sign-up";

export const useCommitteeSignUp = () => {
  const router = useRouter();
  const { mutate } = useSignUpMutate();

  const onCommitteeSignUp = (formData: CommitteeSignUpFormData) => {
    mutate(formData, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message);
      },
      onSuccess: () => {
        router.push(ROUTE.COMMITTEE.MAIN);
        alert("회원가입에 성공했습니다.");
      },
    });
  };
  return {
    onCommitteeSignUp,
  };
};

export const useSignUpMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, CommitteeSignUpFormData>({
    mutationKey: ["committeeSignUp"],
    mutationFn: postCommitteeSignUp,
  });
};
