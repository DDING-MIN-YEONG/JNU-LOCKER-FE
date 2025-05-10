import { usePathname } from "next/navigation";

export const useGetApplyDetailPageEventId = () => {
  const pathName = usePathname();
  const eventId = pathName.split("/").at(-1) || "";

  return {
    eventId,
  };
};
