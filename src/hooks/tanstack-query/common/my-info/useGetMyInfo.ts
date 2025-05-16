import { getMyInfo } from "@/apis/common/my-info";
import { MyInfo } from "@/apis/dtos/common/my-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery<MyInfo>({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
