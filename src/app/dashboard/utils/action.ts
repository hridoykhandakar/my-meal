"use server";

import { z } from "zod";

const usernameFormSchema = z.object({
  username: z.string().min(2),
});

const salaryFormSchema = z.object({
  salary: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Salary must be a positive number.",
  }),
});

export async function submitUsernameForm(
  data: z.infer<typeof usernameFormSchema>
) {
  // Validate the data
  const validatedData = usernameFormSchema.parse(data);

  // Here you would typically send the data to your API
  // For this example, we'll just log it and return a success message
  console.log("Username form data received:", validatedData);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: "Username form submitted successfully!" };
}

export async function submitSalaryForm(data: z.infer<typeof salaryFormSchema>) {
  // Validate the data
  const validatedData = salaryFormSchema.parse(data);

  // Here you would typically send the data to your API
  // For this example, we'll just log it and return a success message
  console.log("Salary form data received:", validatedData);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: "Salary form submitted successfully!" };
}
