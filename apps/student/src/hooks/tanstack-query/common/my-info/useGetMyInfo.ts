import { getMyInfo } from "@/apis/common/my-info";
import { MyInfo } from "@/apis/dtos/common/my-info";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery<MyInfo, ApiResponseError>({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
