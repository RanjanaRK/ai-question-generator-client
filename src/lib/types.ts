import z from "zod";
import { loginSchema, registerSchema } from "./schema/zodSchema";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

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

export interface AuthResponse {
  success: boolean;

  data: User;

  message: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  createdAt: Timestamp;
}

export interface UploadPdfResponse {
  success: boolean;
  pdfId: string;
}

export type PdfDocument = {
  id: string;
  originalName: string;
  storagePath: string;
  createdAt: string;
  expiresAt: string | null;
  userId: string | null;
  parsedText: string | null;
  status: string;
  signedUrl: string;
};

export type GetPdfResponse = {
  success: boolean;
  data: PdfDocument;
};
