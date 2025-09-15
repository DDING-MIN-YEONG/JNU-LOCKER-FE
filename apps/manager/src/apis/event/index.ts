import { EventDetail, EventList } from "@/apis/dtos/event";
import { https } from "@/apis/instance/https";
import { CreateEventRequest, PutEventRequest } from "@/types/event";

export const postCreateEvent = async (formData: CreateEventRequest) => {
  await https.post("events", formData);
};

export const getEventList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(`events?page=${page}&size=${size}&direction=${direction}&sort=createdAt`);

  return new EventList(data);
};

export const deleteEvent = async (id: string) => {
  await https.delete(`events/${id}`);
};

interface PutEventPublishParam {
  id: string;
  isPublish: boolean;
}

export const putEventPublish = async ({ id, isPublish }: PutEventPublishParam) => {
  await https.put(`events/${id}/publish`, {
    isPublish,
  });
};

export const getEvent = async (eventId: string) => {
  const { data } = await https.get(`events/${eventId}`);

  return new EventDetail(data);
};

export const putEvent = async ({ formData, eventId }: { formData: PutEventRequest; eventId: string }) => {
  await https.put(`events/${eventId}`, formData);
};
