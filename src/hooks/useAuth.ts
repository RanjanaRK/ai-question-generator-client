import { login } from "@/lib/api/auth/login.api";
import { register } from "@/lib/api/auth/register.api";
import { LoginSchemaType, RegisterSchemaType } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/auth.context";
import { logout } from "@/lib/api/auth/logout.api";
import { googleLogin } from "@/lib/api/auth/googleLogin.api";

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser } = context;

  const loginMutation = useMutation({
    mutationFn: (data: LoginSchemaType) => login(data),

    onSuccess: (response) => {
      toast.success(response.message);

      // refresh user
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });

      router.push("/");
    },

    onError: (error: any) => {
      toast.error(error?.message || "Login failed");
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterSchemaType) => register(data),
    onSuccess: (response) => {
      toast.success(response.message);
      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error(error?.message || "Register failed");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.removeQueries({
        queryKey: ["me"],
      });

      router.push("/auth/login");
    },
  });

  const googleMutation = useMutation({
    mutationFn: googleLogin,

    onSuccess: (response) => {
      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });

      router.push("/");
    },
  });

  return {
    user,
    handleLogin: loginMutation.mutateAsync,
    loading: loginMutation.isPending,
    error: loginMutation.error,

    handleRegister: registerMutation.mutateAsync,
    registerLoading: registerMutation.isPending,
    registerError: registerMutation.error,

    handleLogout: logoutMutation.mutateAsync,

    handleGoogle: googleMutation.mutateAsync,
  };
};
