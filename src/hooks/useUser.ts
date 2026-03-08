"use client";

import { deleteAccount } from "@/lib/api/user/deleteAccount.api";
import { getMe } from "@/lib/api/user/me.api";
import { profileUpdate } from "@/lib/api/user/profileUpdate.api";
import { upgradePlan } from "@/lib/api/user/upgradePlan.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

export const useAccount = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const userAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.clear();

      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error("Failed to delete account");
    },
  });
  return {
    deleteUserAccount: userAccountMutation.mutate,
    deleteUserAccountAsync: userAccountMutation.mutateAsync,
    isDeleting: userAccountMutation.isPending,
  };
};

export const useUserPlan = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const userPlanMutation = useMutation({
    mutationFn: upgradePlan,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to upgrade plan");
    },
  });
  return {
    userPlanMutation,
  };
};
