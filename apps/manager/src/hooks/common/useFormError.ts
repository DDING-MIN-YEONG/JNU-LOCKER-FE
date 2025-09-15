import { useState } from "react";

export interface FormError {
  isError: boolean;
  errorMessage: string;
}

export const useFormError = () => {
  const [error, setError] = useState<FormError>({
    isError: false,
    errorMessage: "",
  });

  const clearError = () => setError({ isError: false, errorMessage: "" });

  const setFormError = (message: string) => setError({ isError: true, errorMessage: message });

  return {
    error,
    setError,
    clearError,
    setFormError,
  };
};
