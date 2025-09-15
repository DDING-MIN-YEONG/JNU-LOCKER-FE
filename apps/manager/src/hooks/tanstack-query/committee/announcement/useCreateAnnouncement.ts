import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { ApiResponseError } from "@/types/common/api";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";
import { CreateAnnouncementFormRequest } from "@/types/committee/announcement";
import { postCreateAnnouncement } from "@/apis/committee/announcement";

export const useCreateAnnouncement = () => {
  const router = useRouter();
  const { mutate, isPending } = useCreateAnnouncementMutate();
  const queryClient = useQueryClient();

  const announcementQueryKeys = useQueryKeys(["announcementList"]);

  const onCreateAnnouncement = (formData: CreateAnnouncementFormRequest) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "공지사항 생성에 실패하였습니다.");
      },
      onSuccess: () => {
        announcementQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        router.push(ROUTE.ANNOUNCEMENT_LIST);
        alert("공지사항 생성에 성공하셨습니다.");
      },
    });
  };
  return {
    onCreateAnnouncement,
    isCreateAnnouncementLoading: isPending,
  };
};

export const useCreateAnnouncementMutate = () => {
  return useMutation<void, ApiResponseError, CreateAnnouncementFormRequest>({
    mutationKey: ["createAnnouncement"],
    mutationFn: postCreateAnnouncement,
  });
};
