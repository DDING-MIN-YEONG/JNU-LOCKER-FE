import { useSearchParams } from "next/navigation";

const useGetCodeParameter = () => {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  return code;
};

export default useGetCodeParameter;
