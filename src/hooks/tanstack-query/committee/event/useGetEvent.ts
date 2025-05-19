import { getEvent } from "@/apis/committee/event";
import { EventDetail } from "@/apis/dtos/committee/event";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetEvent = (eventId: string) => {
  return useQuery<EventDetail, ApiResponseError>({
    queryKey: ["event", eventId],
    queryFn: () => getEvent(eventId),
    enabled: !!eventId,
  });
};
