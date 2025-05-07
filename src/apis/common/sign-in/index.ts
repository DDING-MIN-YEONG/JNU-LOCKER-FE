import { https } from "@/apis/instance/https";
import { SignInFormData } from "@/types/common/sign-in";

export const postSignIn = async (formData: SignInFormData) => {
  await https.post("auth/login", formData);
};
