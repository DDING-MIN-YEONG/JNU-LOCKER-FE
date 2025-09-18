import { getMyInfo } from "@/apis/common/my-info";
import { AxiosError, MyInfoResponse } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMyInfo = () => {
  return useQuery<MyInfoResponse, AxiosError>({
    queryKey: ["myInfo"],
    queryFn: () => getMyInfo(),
  });
};
