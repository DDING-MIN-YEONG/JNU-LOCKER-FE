import { MutateOptions, useMutation } from "@tanstack/react-query";
import { postCommitteeSignUp } from "@/apis/committee/sign-up";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { SignUpFormData } from "@/types/common/sign-up";
import { AxiosError } from "axios";

export const useCommitteeSignUp = () => {
  const router = useRouter();
  const { postCommitteeSignUp } = useSignUpMutate();

  const onCommitteeSignUp = (formData: SignUpFormData) => {
    postCommitteeSignUp(formData, {
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
  const { mutate } = useMutation<void, AxiosError<{ message: string }>, SignUpFormData>({
    mutationKey: ["committeeSignUp"],
    mutationFn: postCommitteeSignUp,
  });

  return {
    postCommitteeSignUp: (
      formData: SignUpFormData,
      mutateOption?: MutateOptions<void, AxiosError<{ message: string }>, SignUpFormData, unknown>,
    ) => {
      mutate(formData, {
        ...mutateOption,
      });
    },
  };
};
