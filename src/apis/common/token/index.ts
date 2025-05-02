import { https } from "@/apis/https";

export const postReissue = async () => {
  await https.post("auth/reissue", {});
};
