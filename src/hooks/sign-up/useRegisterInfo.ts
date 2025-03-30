import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { phoneNumberReplace } from "@/utils/replacer";
import { REGISTER_INFO, VALIDATION_TYPES } from "@/constants/error";

const useRegisterInfo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    department: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const validateForm = () => {
    const fields = Object.keys(REGISTER_INFO) as Array<keyof typeof REGISTER_INFO>;
    for (const field of fields) {
      if (!formData[field]) {
        return REGISTER_INFO[field][VALIDATION_TYPES.REQUIRED];
      }
    }

    return null;
  };

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ isError: false, errorMessage: "" });

    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }
    // TODO : useMutation을 사용하여 회원가입 API 호출
    alert("회원가입이 완료되었습니다!");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: id === "phoneNumber" ? phoneNumberReplace(value) : value,
    }));
  };

  const onPrevBtnClick = () => {
    router.push(ROUTE.SIGN_UP);
  };

  return {
    formAction,
    formData,
    onChange,
    error,
    onPrevBtnClick,
  };
};

export default useRegisterInfo;
