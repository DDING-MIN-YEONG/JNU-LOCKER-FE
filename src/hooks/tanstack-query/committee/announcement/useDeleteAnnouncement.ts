import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponseError } from "@/types/common/api";
import { deleteAnnouncement } from "@/apis/committee/announcement";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";

export const useDeleteAnnouncement = () => {
  const { mutate, isPending } = useDeleteAnnouncementMutate();
  const queryClient = useQueryClient();
  const router = useRouter();
  const announcementQueryKeys = useQueryKeys(["announcementList"]);

  const onDeleteAnnouncement = (announcementId: string) => {
    mutate(announcementId, {
      onError: (error) => {
        alert(error.response.data.message || "공지사항 삭제에 실패하였습니다.");
      },
      onSuccess: () => {
        announcementQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
        router.push(ROUTE.COMMITTEE.ANNOUNCEMENT_LIST);
        alert("공지사항 삭제에 성공하셨습니다.");
      },
    });
  };
  return {
    onDeleteAnnouncement,
    isDeleteAnnouncementLoading: isPending,
  };
};

export const useDeleteAnnouncementMutate = () => {
  return useMutation<void, ApiResponseError, string>({
    mutationKey: ["deleteAnnouncement"],
    mutationFn: deleteAnnouncement,
  });
};
