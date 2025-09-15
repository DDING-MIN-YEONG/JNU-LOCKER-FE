import { ApproveWaitList } from "@/apis/dtos/committee/approve-wait";
import { https } from "@/apis/instance/https";
import { ApproveWaitRequest } from "@/types/committee/approve-wait";

export const getApproveWaitList = async (page: number, size: number, direction: "asc" | "desc") => {
  const { data } = await https.get(
    `auth/managers/pending?page=${page}&size=${size}&direction=${direction}&sort=createdAt`,
  );

  return new ApproveWaitList(data);
};

export const postApproveWait = async (formData: ApproveWaitRequest) => {
  await https.post("auth/managers/approve", formData);
};

export const postRejectApproveWait = async (formData: ApproveWaitRequest) => {
  await https.delete("auth/managers/approve", {
    data: formData,
  });
};
