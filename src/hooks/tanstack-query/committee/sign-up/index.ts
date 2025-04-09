import { MutateOptions, useMutation } from "@tanstack/react-query";
import { postCommitteeSignUp } from "@/apis/committee/sign-up";
import { CommitteeSignUpFormData } from "@/types/committee/sign-up";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useCommitteeSignUp = () => {
  const router = useRouter();
  const { postCommitteeSignUp } = useSignUpMutate();

  const onCommitteeSignUp = (formData: CommitteeSignUpFormData) => {
    postCommitteeSignUp(formData, {
      onError: () => {
        alert("에러가 발생했습니다.");
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
  const { mutate } = useMutation({
    mutationKey: ["committeeSignUp"],
    mutationFn: postCommitteeSignUp,
  });

  return {
    postCommitteeSignUp: (
      formData: CommitteeSignUpFormData,
      mutateOption?: MutateOptions<void, Error, CommitteeSignUpFormData, unknown>,
    ) => {
      mutate(formData, {
        ...mutateOption,
      });
    },
  };
};
