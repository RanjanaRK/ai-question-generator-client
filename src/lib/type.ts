import z from "zod";
import { loginSchema } from "./schema/zodSchema";

export type LoginSchemaType = z.infer<typeof loginSchema>;
