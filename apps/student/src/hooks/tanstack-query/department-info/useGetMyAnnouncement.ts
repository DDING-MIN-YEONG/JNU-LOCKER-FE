import { getMyAnnouncement } from "@/apis/department-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyAnnouncement = () => {
  return useQuery({
    queryKey: ["myAnnouncement"],
    queryFn: () => getMyAnnouncement(),
  });
};
