import { api } from "@/lib/axios";
import { deletePdfResponse, GetPdfResponse, UploadPdfResponse } from "@/lib/types";

export const deletePdf = async (pdfId: string): Promise<deletePdfResponse> => {
  try {
    const { data } = await api.delete(`/api/pdf/${pdfId}`);

    return data;
  } catch (error) {
    throw error;
  }
};
