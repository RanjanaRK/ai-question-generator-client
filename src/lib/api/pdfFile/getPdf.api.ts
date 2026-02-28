import { api } from "@/lib/axios";
import { GetPdfResponse } from "@/lib/types";

export const getPdf = async (pdfId: string): Promise<GetPdfResponse> => {
  const { data } = await api.get(`/api/pdf/${pdfId}`);

  console.log(data);

  return data;
};
