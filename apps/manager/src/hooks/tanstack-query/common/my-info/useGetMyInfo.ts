import { getMyInfo } from "@/apis/common/my-info";
import { AxiosError } from "@/types/common/api";
import { MyInfoResponse } from "@/types/my-info";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery<MyInfoResponse, AxiosError>({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
