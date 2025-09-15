import { useRouter } from "next/navigation";

export const useBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return { handleBack };
};
