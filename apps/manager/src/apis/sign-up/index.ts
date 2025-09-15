import { https } from "@/apis/instance/https";
import { CommitteeSignUpFormData } from "@/types/sign-up";

export const postCommitteeSignUp = async (formData: CommitteeSignUpFormData) => {
  await https.post("auth/managers/signup", formData);
};
