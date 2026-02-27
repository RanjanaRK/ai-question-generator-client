import { api } from "@/lib/axios";

export interface PdfResponse {
  success: boolean;

  data: {
    id: string;
    originalName: string;
    parsedText: string;
  };
}

export const getPdf = async (pdfId: string): Promise<PdfResponse> => {
  const { data } = await api.get(`/api/pdf/${pdfId}`);

  return data;
};
