import { https } from "@/apis/https";
import { SignUpFormData } from "@/types/common/sign-up";

export const postStudentSignUp = async (formData: SignUpFormData) => {
  await https.post("auth/users/signup", formData);
};
