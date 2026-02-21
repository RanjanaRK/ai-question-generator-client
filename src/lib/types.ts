import z from "zod";
import { loginSchema, registerSchema } from "./schema/zodSchema";

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;

export type QA = {
  question: string;
  answer: string;
};

export type MCQ = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};
