import { getDepartments, getOrganizations, postSubmitEmail, postVerifyCertificationCode } from "@/apis/common/sign-up";
import { ApiResponseError } from "@/types/common/api";
import { SubmitCertificationCodeData, SubmitEmailData } from "@/types/common/sign-up";
import { isJnuEmail } from "@/utils/validator";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

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

export const useSubmitEmail = (
  setIsEmailCertification: Dispatch<SetStateAction<boolean>>,
  setCountdown: Dispatch<SetStateAction<number | null>>,
) => {
  const { mutate } = useSubmitEmailMutate();

  const onSubmitEmail = (data: SubmitEmailData) => {
    if (!isJnuEmail(data.email)) {
      alert("전남대학교 학생 이메일을 입력해주세요.");
      return;
    }

    mutate(data, {
      onError: (error) => {
        alert(error.response.data.message || "이메일 전송에 실패했습니다.");
      },
      onSuccess: () => {
        setIsEmailCertification(true);
        setCountdown(300);
        alert("해당 이메일로 인증코드가 전송되었습니다. 이메일을 확인해주세요.");
      },
    });
  };

  return {
    onSubmitEmail,
  };
};

export const useSubmitEmailMutate = () => {
  return useMutation<void, ApiResponseError, SubmitEmailData>({
    mutationKey: ["submitEmail"],
    mutationFn: postSubmitEmail,
  });
};

export const useVerifyCertificationCode = (setCountdown: Dispatch<SetStateAction<number | null>>) => {
  const { mutate } = useVerifyCertificationCodeMutate();

  const onVerifyCertificationCode = (data: SubmitCertificationCodeData) => {
    mutate(data, {
      onError: (error) => {
        alert(error.response.data.message || "인증에 실패하였습니다.");
      },
      onSuccess: () => {
        setCountdown(null);
        alert("인증에 성공하였습니다.");
      },
    });
  };

  return {
    onVerifyCertificationCode,
  };
};

export const useVerifyCertificationCodeMutate = () => {
  return useMutation<void, ApiResponseError, SubmitCertificationCodeData>({
    mutationKey: ["verifyCertificationCode"],
    mutationFn: postVerifyCertificationCode,
  });
};
