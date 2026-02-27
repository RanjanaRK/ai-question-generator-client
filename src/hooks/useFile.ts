import { getPdf } from "@/lib/api/pdfFile/getPdf.api";
import { uploadPdf } from "@/lib/api/pdfFile/uploadPdf.api";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

export const useUploadPdf = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: uploadPdf,

    onSuccess: (data) => {
      router.push(`/pdf/${data.pdfId}`);
    },

    onError: (error) => {
      console.log(error);
    },
  });
};

export const useGetPdf = (pdfId: string) => {
  return useQuery({
    queryKey: ["pdf", pdfId],

    queryFn: () => getPdf(pdfId),

    enabled: !!pdfId,
  });
};
