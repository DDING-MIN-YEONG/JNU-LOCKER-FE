import { numberReplace } from "@/utils/replacer";
import { ChangeEvent, useState } from "react";

export const useApplyLockerFormData = () => {
  const [formData, setFormData] = useState({
    lockerNumber: "",
    floor: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) =>
      id === "floor"
        ? { ...prev, [id]: numberReplace(value) }
        : {
            ...prev,
            [id]: value,
          },
    );
  };

  const setLockerFormData = (lockerName: string, floor: number) => {
    setFormData({
      lockerNumber: lockerName,
      floor: floor.toString(),
    });
  };

  return {
    formData,
    setFormData,
    onChange,
    setLockerFormData,
  };
};
