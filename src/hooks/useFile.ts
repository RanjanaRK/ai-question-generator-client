import { deletePdf } from "@/lib/api/pdfFile/deletePdf.api";
import { getPdf } from "@/lib/api/pdfFile/getPdf.api";
import { uploadPdf } from "@/lib/api/pdfFile/uploadPdf.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useUploadPdf = () => {
  const router = useRouter();
  const pdfUploadMutation = useMutation({
    mutationFn: uploadPdf,
    onSuccess: (data) => {
      toast.success(data.success);
      router.push(`/result/${data.pdfId}`);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Upload failed");
    },
  });

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

export const useDeletePdf = () => {
  const queryClient = useQueryClient();

  const deletePdfMutation = useMutation({
    mutationFn: (pdfId: string) => deletePdf(pdfId),

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Delete failed");
    },
  });

  return {
    deletePdfMutation,
  };
};
