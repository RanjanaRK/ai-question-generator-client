import { login } from "@/lib/api/auth/login.api";
import { register } from "@/lib/api/auth/register.api";
import { LoginSchemaType, RegisterSchemaType } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/auth.context";
import { logout } from "@/lib/api/auth/logout.api";

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
      console.log(user);

      toast.success(response.message);
      router.push("/");
    },
    onError: (error) => {
      console.error(error);
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
    mutationFn: () => logout(),
    onSuccess: (response) => {
      toast.success(response.message);
      router.push("/auth/login");
    },
    onError: (error) => {
      toast.error(error?.message || "logout failed");
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
  };
};
