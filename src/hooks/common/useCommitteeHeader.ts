import { usePathname } from "next/navigation";
import { useGetMyInfo } from "@/hooks/tanstack-query/common/my-info/useGetMyInfo";

export const useCommitteeHeader = () => {
  const { data, isPending, isError } = useGetMyInfo();
  const path = usePathname();

  return { data, isPending, isError, path };
};
