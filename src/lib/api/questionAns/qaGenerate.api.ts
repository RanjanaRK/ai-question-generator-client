import { api } from "@/lib/axios";
import { GenerateQaResponse } from "@/lib/types";

export const qaGenerate = async (pdfId: string): Promise<GenerateQaResponse> => {
  try {
    const { data } = await api.post("api/generate/qa", {
      pdfId: pdfId,
    });

    // console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
};
