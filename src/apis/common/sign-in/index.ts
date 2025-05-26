import { LoginInfo } from "@/apis/dtos/common/my-info";
import { https } from "@/apis/instance/https";
import { SignInFormData } from "@/types/common/sign-in";

export const postSignIn = async (formData: SignInFormData) => {
  const { data } = await https.post("auth/login", formData);

  return new LoginInfo(data);
};
