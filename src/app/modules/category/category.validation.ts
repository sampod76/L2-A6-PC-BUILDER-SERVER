import { z } from "zod";

export const MySchema = z.object({
  category: z.string().min(1),
  imageLink: z.string().min(1),
  subCategory: z.string().min(1),
});