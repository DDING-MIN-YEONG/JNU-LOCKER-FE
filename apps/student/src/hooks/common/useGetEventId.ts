import { usePathname } from "next/navigation";

export const useGetEventId = () => {
  const pathName = usePathname();
  const eventId = pathName.split("/").at(-1) || "";

  return {
    eventId,
  };
};
