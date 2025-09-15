import { https } from "@/apis/instance/https";
import { StudentSignUpFormData } from "@/types/sign-up";

export const postStudentSignUp = async (formData: StudentSignUpFormData) => {
  await https.post("auth/users/signup", formData);
};
