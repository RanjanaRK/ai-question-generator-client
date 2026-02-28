import { getPdf } from "@/lib/api/pdfFile/getPdf.api";
import { uploadPdf } from "@/lib/api/pdfFile/uploadPdf.api";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useUploadPdf = () => {
  const router = useRouter();
  const pdfUploadMutation = useMutation({
    mutationFn: uploadPdf,
    onSuccess: (data) => {
      toast.success(data.success);
      router.push("/result/${data.pdfId}");
    },
  });
  onError: (error: any) => {
    console.log(error);
  };

  return {
    pdfUploadmutate: pdfUploadMutation.mutateAsync,
    loading: pdfUploadMutation.isPending,
    error: pdfUploadMutation.error,
  };
};

export const useGetPdf = (pdfId: string) => {
  return useQuery({
    queryKey: ["pdf", pdfId],

    queryFn: () => getPdf(pdfId),

    enabled: !!pdfId,
  });
};
