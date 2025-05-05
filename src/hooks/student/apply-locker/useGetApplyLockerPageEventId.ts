import { usePathname } from "next/navigation";

export const useGetApplyLockerPageEventId = () => {
  const pathName = usePathname();
  const eventId = Number(pathName.split("/").at(-1)) || 0;

  return {
    eventId,
  };
};
