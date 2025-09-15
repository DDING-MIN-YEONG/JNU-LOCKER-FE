import { usePathname } from "next/navigation";

export const useGetApplyLockerPageEventId = () => {
  const pathName = usePathname();
  const eventId = pathName.split("/").at(-1) || "";

  return {
    eventId,
  };
};
