import { mcqGenerate } from "@/lib/api/questionAns/mcqGenerate.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGenerate = () => {
  const mcqMutation = useMutation({
    mutationFn: mcqGenerate,

    onSuccess: (data) => {
      toast.success(data.success);
    },

    onError: (error: any) => {
      console.log(error);

      toast.error("Generation Failed");
    },
  });

  return {
    mcqMutation,
  };
};
