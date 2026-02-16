import z from "zod";
import { loginSchema, registerSchema } from "./schema/zodSchema";

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
