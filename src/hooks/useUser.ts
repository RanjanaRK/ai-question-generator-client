"use client";

import { getMe } from "@/lib/api/user/me.api";
import { profileUpdate } from "@/lib/api/user/profileUpdate.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],

    queryFn: getMe,

    staleTime: 1000 * 60 * 5,
  });
};

export const useProfile = () => {
  const queryClient = useQueryClient();

  const profileMutation = useMutation({
    mutationFn: profileUpdate,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  return {
    updateProfile: profileMutation.mutate,
    updateProfileAsync: profileMutation.mutateAsync,
    isUpdating: profileMutation.isPending,
  };
};
