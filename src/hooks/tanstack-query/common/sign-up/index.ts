import { getDepartments, getOrganizations } from "@/apis/common/sign-up";
import { useQuery } from "@tanstack/react-query";

export const useOrganizationsQuery = (type: "학생회" | "위원회" | "값을 선택해주세요.") => {
  let category: "COUNCIL" | "COMMITTEE";

  if (type === "학생회") {
    category = "COUNCIL";
  } else if (type === "위원회") {
    category = "COMMITTEE";
  }

  const { data: organizations } = useQuery({
    queryKey: ["organizations", type],
    queryFn: () => getOrganizations(category),
    staleTime: 1000 * 60 * 60,
    enabled: type === "학생회" || type === "위원회",
  });

  return organizations;
};

export const useDepartmentsQuery = (id: number) => {
  const { data: departments } = useQuery({
    queryKey: ["departments", id],
    queryFn: () => getDepartments(id),
    staleTime: 1000 * 60 * 60,
    enabled: !!id,
  });

  return departments;
};
