import { useState } from "react";
import { formatDate } from "../utils/dateUtils";

interface FormData {
  [key: string]: { date: string; number: string };
}

export function useFormState(users: string[]) {
  const [formData, setFormData] = useState<FormData>(() => {
    const initialData: FormData = {};
    users.forEach((user) => {
      initialData[user] = { date: formatDate(new Date()), number: "" };
    });
    return initialData;
  });

  const updateFormData = (
    user: string,
    field: "date" | "number",
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [user]: { ...prevData[user], [field]: value },
    }));
  };

  return { formData, updateFormData };
}
