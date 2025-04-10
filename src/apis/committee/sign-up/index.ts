import { https } from "@/apis/https";
import { SignUpFormData } from "@/types/common/sign-up";

export const postCommitteeSignUp = async (formData: SignUpFormData) => {
  await https.post("auth/managers/signup", formData);
};
