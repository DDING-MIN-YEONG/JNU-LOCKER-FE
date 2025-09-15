import { getEvent } from "@/apis/event";
import { EventDetail } from "@/apis/dtos/event";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetEvent = (eventId: string) => {
  return useQuery<EventDetail, ApiResponseError>({
    queryKey: ["event", eventId],
    queryFn: () => getEvent(eventId),
    enabled: !!eventId,
  });
};
