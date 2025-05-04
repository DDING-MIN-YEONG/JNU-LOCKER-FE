import { EventList } from "@/apis/dtos/committee/event";
import { https } from "@/apis/https";
import { CreateEventRequest } from "@/types/committee/event";

export const postCreateEvent = async (formData: CreateEventRequest) => {
  await https.post("events", formData);
};

export const getEventList = async (page: number, size: number, direction: "asc" | "desc" = "asc") => {
  const { data } = await https.get(`events?page=${page}&size=${size}&direction=${direction}`);

  return new EventList(data);
};

export const deleteEvent = async (id: number) => {
  await https.delete(`events/${id}`);
};

interface PutEventPublishParam {
  id: number;
  isPublish: boolean;
}

export const putEventPublish = async ({ id, isPublish }: PutEventPublishParam) => {
  await https.put(`events/${id}/publish`, {
    isPublish,
  });
};
