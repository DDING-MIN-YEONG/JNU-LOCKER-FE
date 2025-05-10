import { useMutation } from "@tanstack/react-query";
import { postCommitteeSignUp } from "@/apis/committee/sign-up";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { CommitteeSignUpFormData } from "@/types/committee/sign-up";
import { ApiResponseError } from "@/types/common/api";

export const useCommitteeSignUp = () => {
  const router = useRouter();
  const { mutate } = useSignUpMutate();

  const onCommitteeSignUp = (formData: CommitteeSignUpFormData) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "회원가입에 실패했습니다.");
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
  return useMutation<void, ApiResponseError, CommitteeSignUpFormData>({
    mutationKey: ["committeeSignUp"],
    mutationFn: postCommitteeSignUp,
  });
};
