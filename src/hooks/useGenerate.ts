import { mcqGenerate } from "@/lib/api/questionAns/mcqGenerate.api";
import { qaGenerate } from "@/lib/api/questionAns/qaGenerate.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGenerate = () => {
  const mcqMutation = useMutation({
    mutationFn: mcqGenerate,

    onSuccess: (data) => {
      toast.success(data.success);
    },
    onError: (error: any) => {},
  });
  const qaMutation = useMutation({
    mutationFn: qaGenerate,

    onSuccess: (data) => {
      toast.success(data.success);
    },

    onError: (error: any) => {},
  });

  return {
    mcqMutation,
    qaMutation,
  };
};
