import { getMyInfo } from "@/apis/common/my-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
