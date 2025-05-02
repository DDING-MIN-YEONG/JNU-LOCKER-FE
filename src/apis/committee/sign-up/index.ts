import { https } from "@/apis/https";
import { CommitteeSignUpFormData } from "@/types/committee/sign-up";

export const postCommitteeSignUp = async (formData: CommitteeSignUpFormData) => {
  await https.post("auth/managers/signup", formData);
};
