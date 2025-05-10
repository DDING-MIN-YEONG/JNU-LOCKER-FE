import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { postCreateEvent } from "@/apis/committee/event";
import { CreateEventForm, CreateEventRequest } from "@/types/committee/event";
import { convertToKST } from "@/functions/date";
import { ApiResponseError } from "@/types/common/api";

export const useCreateEvent = () => {
  const router = useRouter();
  const { mutate } = useCreateEventMutate();

  const onCreateEvent = (formData: CreateEventForm) => {
    if (!formData.title) {
      alert("이벤트 제목을 입력해주세요.");
      return;
    }

    if (!formData.startAt || !formData.endAt) {
      alert("시작 시간과 종료 시간을 선택해주세요.");
      return;
    }

    if (formData.participationDepartmentIds.length === 0) {
      alert("참여 부서를 선택해주세요.");
      return;
    }

    const invalidFloor = formData.floors.find(
      (floor) =>
        floor.floorNumber === null ||
        floor.prefixes.some((prefix) =>
          prefix.ranges.some((range) => range.lockerStartNumber === null || range.lockerEndNumber === null),
        ),
    );

    if (invalidFloor) {
      alert("사물함 정보를 모두 입력해주세요.");
      return;
    }

    const startAtKST = convertToKST(formData.startAt);
    const endAtKST = convertToKST(formData.endAt);

    const requestData: CreateEventRequest = {
      title: formData.title,
      startAt: startAtKST,
      endAt: endAtKST,
      participationDepartmentIds: formData.participationDepartmentIds.map((department) => department.id),
      floors: formData.floors.map((floor) => ({
        floorNumber: floor.floorNumber as number,
        prefixes: floor.prefixes.map((prefix) => ({
          lockerPrefix: prefix.lockerPrefix,
          ranges: prefix.ranges.map((range) => ({
            lockerStartNumber: range.lockerStartNumber as number,
            lockerEndNumber: range.lockerEndNumber as number,
          })),
        })),
      })),
    };

    mutate(requestData, {
      onError: (error) => {
        alert(error.response.data.message || "이벤트 생성에 실패하였습니다.");
      },
      onSuccess: () => {
        router.push(ROUTE.COMMITTEE.EVENT_LIST);
        alert("이벤트 생성에 성공하셨습니다.");
      },
    });
  };
  return {
    onCreateEvent,
  };
};

export const useCreateEventMutate = () => {
  return useMutation<void, ApiResponseError, CreateEventRequest>({
    mutationKey: ["createEvent"],
    mutationFn: postCreateEvent,
  });
};
