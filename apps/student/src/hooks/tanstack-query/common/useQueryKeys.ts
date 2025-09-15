import { useQueryClient } from "@tanstack/react-query";

export const useQueryKeys = (queryKey: string[]) => {
  const queryClient = useQueryClient();

  const allQueries = queryClient.getQueriesData({
    queryKey,
  });

  return allQueries.map(([key]) => key);
};
