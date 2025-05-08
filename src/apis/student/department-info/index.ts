import { MyEvent } from "@/apis/dtos/student/event";
import { https } from "@/apis/instance/https";
import { MyEventType } from "@/types/student/department-info";

export const getMyEvent = async () => {
  const { data } = await https.get("events/me");

  const myEventList = data.map((event: MyEventType) => new MyEvent(event));

  return myEventList;
};
