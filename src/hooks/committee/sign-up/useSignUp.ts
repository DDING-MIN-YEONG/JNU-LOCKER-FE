import { ChangeEvent, FormEvent, useState } from "react";
import { COMMITTEE_SIGN_UP, VALIDATION_TYPES } from "@/constants/error";
import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/committee/sign-up";

interface FormData {
  category: {
    id: number;
    value: "학생회" | "위원회" | "값을 선택해주세요.";
  };
  affiliation: {
    id: number;
    value: string;
  };
  department: {
    id: number;
    value: string;
  };
}

const useSignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    category: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    affiliation: {
      id: 0,
      value: "선택 안함",
    },
    department: {
      id: 0,
      value: "선택 안함",
    },
  });

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  let organizations = useOrganizationsQuery(formData.category.value);
  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  const validateForm = () => {
    const fields = Object.keys(COMMITTEE_SIGN_UP) as Array<keyof typeof COMMITTEE_SIGN_UP>;
    for (const field of fields) {
      if (!formData[field]) {
        return COMMITTEE_SIGN_UP[field][VALIDATION_TYPES.REQUIRED];
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

    alert("개인 정보 입력을 위한 페이지로 이동합니다.");
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    setFormData((prev) => ({
      ...prev,
      [id]: { id: selectedId, value },
    }));
  };

  return {
    formAction,
    formData,
    onChange,
    error,
    organizations,
    departments,
  };
};

export default useSignUp;
