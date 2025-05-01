import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { AxiosError } from "axios";
import { postCreateEvent } from "@/apis/committee/event";
import { CreateEventForm, CreateEventRequest } from "@/types/committee/event";

export const useCreateEvent = () => {
  const router = useRouter();
  const { mutate } = useCreateEventMutate();

  const onCreateEvent = (formData: CreateEventForm) => {
    const requestData: CreateEventRequest = {
      title: formData.title,
      startAt: formData.startAt as Date,
      endAt: formData.endAt as Date,
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
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message);
      },
      onSuccess: () => {
        router.push(ROUTE.COMMITTEE.EVENT);
        alert("이벤트 생성에 성공하셨습니다.");
      },
    });
  };
  return {
    onCreateEvent,
  };
};

export const useCreateEventMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, CreateEventRequest>({
    mutationKey: ["createEvent"],
    mutationFn: postCreateEvent,
  });
};
