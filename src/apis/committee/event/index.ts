import { https } from "@/apis/https";
import { CreateEventRequest } from "@/types/committee/event";

export const postCreateEvent = async (formData: CreateEventRequest) => {
  await https.post("events", formData);
};
