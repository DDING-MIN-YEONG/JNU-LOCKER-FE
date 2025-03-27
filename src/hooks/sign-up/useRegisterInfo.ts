import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { phoneNumberReplace } from "@/utils/replacer";

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
    if (!formData.name) {
      return "이름을 입력해 주세요.";
    }
    if (!formData.affiliation) {
      return "소속 대학을 입력해 주세요.";
    }
    if (!formData.department) {
      return "소속 학과를 입력해 주세요.";
    }
    if (!formData.phoneNumber) {
      return "전화번호를 입력해 주세요.";
    }
    return null;
  };

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError({ isError: true, errorMessage: errorMessage });
      alert(errorMessage);
      return;
    }
    // TODO : useMutation을 사용하여 회원가입 API 호출
    setError({ isError: false, errorMessage: "" });
    alert("회원가입이 완료되었습니다!");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "phoneNumber") {
      const replacedValue = phoneNumberReplace(value);
      setFormData((prev) => ({
        ...prev,
        [id]: replacedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const onPrevBtnClick = () => {
    router.push(ROUTE.SIGN_UP);
  };

  const onNextBtnClick = () => {
    router.push(ROUTE.REGISTER_INFO);
  };

  return {
    formAction,
    formData,
    onChange,
    error,
    onPrevBtnClick,
    onNextBtnClick,
  };
};

export default useRegisterInfo;
