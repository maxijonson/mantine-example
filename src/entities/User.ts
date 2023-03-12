import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive(),
});

export type User = z.infer<typeof userSchema>;
