import { Department, Organization } from "@/apis/dtos/sign-up";
import { https } from "@/apis/https";

export const getOrganizations = async (type: "COUNCIL" | "COMMITTEE") => {
  const { data } = await https.get(`organizations?type=${type}`);

  const organizations = data.map(({ id, name }: { id: number; name: string }) => new Organization({ id, name }));

  return organizations;
};

export const getDepartments = async (id: number) => {
  const { data } = await https.get(`organizations/${id}/departments`);

  const departments = data.map(({ id, name }: { id: number; name: string }) => new Department({ id, name }));

  return departments;
};
