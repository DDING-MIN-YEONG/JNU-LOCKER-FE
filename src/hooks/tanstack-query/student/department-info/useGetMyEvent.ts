import { getMyEvent } from "@/apis/student/department-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyEvent = () => {
  return useQuery({
    queryKey: ["myEvent"],
    queryFn: () => getMyEvent(),
  });
};
