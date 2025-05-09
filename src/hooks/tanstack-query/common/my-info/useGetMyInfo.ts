import { getMyInfo } from "@/apis/common/my-info";
import { MyInfo } from "@/apis/dtos/common/my-info";
import { QueryError } from "@/types/common/query";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery<MyInfo, QueryError>({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
