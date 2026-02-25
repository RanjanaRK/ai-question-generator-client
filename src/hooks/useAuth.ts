import { login } from "@/lib/api/auth/login.api";
import { register } from "@/lib/api/auth/register.api";
import { LoginSchemaType, RegisterSchemaType } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/auth.context";

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
      toast.error(error?.response?.data?.message || "Register failed");
    },
  });

  // const logoutMutation = useMutation({
  //   mutationFn: () => ,
  //   onSuccess: () => {},
  //   onError: () => {},
  // });

  return {
    user: loginMutation.data?.user,

    handleLogin: loginMutation.mutateAsync,

    loading: loginMutation.isPending,

    error: loginMutation.error,

    handleRegister: registerMutation.mutateAsync,

    registerLoading: registerMutation.isPending,

    registerError: registerMutation.error,
  };
};
