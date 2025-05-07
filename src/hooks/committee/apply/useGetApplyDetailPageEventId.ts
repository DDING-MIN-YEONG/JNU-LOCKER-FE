import { usePathname } from "next/navigation";

export const useGetApplyDetailPageEventId = () => {
  const pathName = usePathname();
  const eventId = Number(pathName.split("/").at(-1)) || 0;

  return {
    eventId,
  };
};
