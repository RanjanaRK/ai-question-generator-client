import { api } from "@/lib/axios";
import { GenerateMCQResponse } from "@/lib/types";

export const mcqGenerate = async (pdfId: string): Promise<GenerateMCQResponse> => {
  try {
    const { data } = await api.post("api/generate/mcq", {
      pdfId: pdfId,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
