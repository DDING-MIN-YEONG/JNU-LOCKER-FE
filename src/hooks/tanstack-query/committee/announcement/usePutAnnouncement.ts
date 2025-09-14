import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponseError } from "@/types/common/api";
import { PutAnnouncementFormRequest } from "@/types/committee/announcement";
import { putAnnouncement } from "@/apis/committee/announcement";

export const usePutAnnouncement = (announcementId: string) => {
  const { mutate, isPending } = usePutAnnouncementMutate();
  const queryClient = useQueryClient();

  const onPutAnnouncement = (formData: PutAnnouncementFormRequest) => {
    mutate(
      { formData, announcementId },
      {
        onError: (error) => {
          alert(error.response.data.message || "공지사항 수정에 실패하였습니다.");
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["announcement", announcementId] });

          alert("공지사항 수정에 성공하셨습니다.");
        },
      },
    );
  };
  return {
    onPutAnnouncement,
    isPutAnnouncementLoading: isPending,
  };
};

export const usePutAnnouncementMutate = () => {
  return useMutation<void, ApiResponseError, { formData: PutAnnouncementFormRequest; announcementId: string }>({
    mutationKey: ["putAnnouncement"],
    mutationFn: putAnnouncement,
  });
};
