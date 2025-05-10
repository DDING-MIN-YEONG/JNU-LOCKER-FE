import { useRouter, useSearchParams } from "next/navigation";

export const useApplyDetailPagination = (page: number, eventId: string) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pagesPerGroup = 5;

  const setPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page.toString());

    router.replace(`?${newParams.toString()}`);
  };

  const queryParams: { page: number; size: number; direction: "asc" | "desc"; eventId: string } = {
    page: page - 1,
    size: 10,
    direction: "asc",
    eventId,
  };

  return {
    setPage,
    pagesPerGroup,
    queryParams,
  };
};
