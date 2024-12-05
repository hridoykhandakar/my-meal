import { z } from "zod";

const todoSchema = z.object({
  title: z.string().min(3),
  isCompleted: z.boolean(),
});

export default todoSchema;
