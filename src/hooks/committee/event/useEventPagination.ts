import { useRouter, useSearchParams } from "next/navigation";

export const useEventPagination = (page: number) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pagesPerGroup = 5;

  const setPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page.toString());

    router.replace(`?${newParams.toString()}`);
  };

  const queryParams: { page: number; size: number; direction: "asc" | "desc" } = {
    page: page - 1,
    size: 4,
    direction: "asc",
  };

  return {
    setPage,
    pagesPerGroup,
    queryParams,
  };
};
