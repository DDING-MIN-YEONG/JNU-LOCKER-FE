import { useSearchParams } from "next/navigation";

export const useGetEventPageParams = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  return {
    page,
  };
};
