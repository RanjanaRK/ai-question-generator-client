import { mcqGenerate } from "@/lib/api/questionAns/mcqGenerate.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useGenerate = () => {
  const router = useRouter();
  const mcqMutation = useMutation({
    mutationFn: mcqGenerate,
    onSuccess: (data) => {
      toast.success(data.success);
      //   router.push(`/result/${data.pdfId}`);
    },
  });
  onError: (error: any) => {
    console.log(error);
  };

  return {
    McqMutation: mcqMutation.mutateAsync,
    loading: mcqMutation.isPending,
    error: mcqMutation.error,
  };
};
