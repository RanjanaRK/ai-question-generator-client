import { api } from "@/lib/axios";
import { UploadPdfResponse } from "@/lib/types";

export const uploadPdf = async (file: File): Promise<UploadPdfResponse> => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await api.post("api/upload", formData);

    return data;
  } catch (error) {
    throw error;
  }
};
