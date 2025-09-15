import { ApplyDetailList } from "@/apis/dtos/apply";
import { https } from "@/apis/instance/https";

export const getApplyDetail = async (
  eventId: string,
  page: number,
  size: number,
  direction: "asc" | "desc" = "asc",
) => {
  const { data } = await https.get(`events/${eventId}/registrations?page=${page}&size=${size}&direction=${direction}`);

  return new ApplyDetailList(data);
};
