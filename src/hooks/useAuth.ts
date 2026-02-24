import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { login } from "@/lib/api/auth/login.api";
import { LoginSchemaType } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser } = context;

  const loginMutation = useMutation({
    mutationFn: (data: LoginSchemaType) => login(data),
    onSuccess: (response) => {
      setUser(response.user);
      router.push("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    user: loginMutation.data?.user,

    handleLogin: loginMutation.mutateAsync,

    loading: loginMutation.isPending,

    error: loginMutation.error,
  };
};
