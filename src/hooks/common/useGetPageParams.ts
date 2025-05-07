import { useSearchParams } from "next/navigation";

export const useGetPageParams = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  return {
    page,
  };
};
