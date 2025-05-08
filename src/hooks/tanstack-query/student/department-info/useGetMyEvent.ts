import { getMyEvent } from "@/apis/student/department-info";
import { MyEventType } from "@/types/student/department-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyEvent = () => {
  return useQuery<MyEventType[]>({
    queryKey: ["myEvent"],
    queryFn: () => getMyEvent(),
  });
};
