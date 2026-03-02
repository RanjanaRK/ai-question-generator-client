import { api } from "@/lib/axios";
import { GenerateMCQResponse } from "@/lib/types";

export const mcqGenerate = async (pdfId: string): Promise<GenerateMCQResponse> => {
  try {
    const { data } = await api.post("api/generate/mcq", {
      pdfId: pdfId,
    });

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
};
