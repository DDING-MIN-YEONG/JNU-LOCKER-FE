import { MutateOptions, useMutation, useQuery } from "@tanstack/react-query";
import { getDepartments, getOrganizations, postCommitteeSignUp } from "@/apis/committee/sign-up";
import { CommitteeSignUpFormData } from "@/types/committee/sign-up";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useOrganizationsQuery = (type: "학생회" | "위원회" | "값을 선택해주세요.") => {
  let category: "COUNCIL" | "COMMITTEE";

  if (type === "학생회") {
    category = "COUNCIL";
  } else if (type === "위원회") {
    category = "COMMITTEE";
  }

  const { data: organizations } = useQuery({
    queryKey: ["organizations", type],
    queryFn: () => getOrganizations(category),
    staleTime: 1000 * 60 * 60,
    enabled: type === "학생회" || type === "위원회",
  });

  return organizations;
};

export const useDepartmentsQuery = (id: number) => {
  const { data: departments } = useQuery({
    queryKey: ["departments", id],
    queryFn: () => getDepartments(id),
    staleTime: 1000 * 60 * 60,
    enabled: !!id,
  });

  return departments;
};

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
