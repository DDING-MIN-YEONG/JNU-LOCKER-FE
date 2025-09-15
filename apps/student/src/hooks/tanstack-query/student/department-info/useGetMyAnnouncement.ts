import { getMyAnnouncement } from "@/apis/student/department-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyAnnouncement = () => {
  return useQuery({
    queryKey: ["myAnnouncement"],
    queryFn: () => getMyAnnouncement(),
  });
};
