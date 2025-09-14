import { usePathname } from "next/navigation";

export const useGetAnnouncementId = () => {
  const pathName = usePathname();
  const announcementId = pathName.split("/").at(-1) || "";

  return {
    announcementId,
  };
};
