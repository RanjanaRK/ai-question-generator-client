import z from "zod";
import { loginSchema, registerSchema } from "./schema/zodSchema";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;

export type QA = {
  question: string;
  answer: string;
};

export interface AuthResponse {
  success: boolean;
  data: User;
  message: string;
}
export interface UpgradePlanResponse {
  success: boolean;
  message: string;
  data: User;
}
export interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  role: string;
  createdAt: Date;
  pdfs: PdfDocument[];
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

export type deletePdfResponse = {
  success: boolean;
  message: string;
};

export type MCQOptions = {
  A: string;
  B: string;
  C: string;
  D: string;
};

export interface MCQ {
  question: string;
  options: MCQOptions;
  correctAnswer: "A" | "B" | "C" | "D";
}

export interface MCQSet {
  id: string;
  pdfId: string;
  createdAt: string;
  expiresAt: string;
}

export interface MCQItems {
  count: number;
}

export interface GenerateMCQResponse {
  success: boolean;
  message: string;
  mcqSetId: string;
  total: number;
  mcqs: MCQ[];
  mcqItems: MCQItems;
  mcqSet: MCQSet;
}

export interface GenerateQaResponse {
  success: boolean;
  message: string;
  total: number;
  qa: Qa[];
}

export interface Qa {
  question: string;
  answer: string;
}
