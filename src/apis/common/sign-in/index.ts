import { https } from "@/apis/https";
import { SignInFormData } from "@/types/common/sign-in";

export const postSignIn = async (formData: SignInFormData) => {
  await https.post("auth/login", formData);
};
