"use client";

import { submitUsernameForm, submitSalaryForm } from "../utils/action";
import { useToast } from "@/hooks/use-toast";

export function useFormHandlers() {
  const { toast } = useToast();

  const handleUsernameSubmit = async (data: { username: string }) => {
    try {
      const result = await submitUsernameForm(data);
      toast({
        title: "Success",
        description: result.message,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while submitting the username form.",
        variant: "destructive",
      });
    }
  };

  const handleSalarySubmit = async (data: { salary: string }) => {
    try {
      const result = await submitSalaryForm(data);
      toast({
        title: "Success",
        description: result.message,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while submitting the salary form.",
        variant: "destructive",
      });
    }
  };

  return { handleUsernameSubmit, handleSalarySubmit };
}
