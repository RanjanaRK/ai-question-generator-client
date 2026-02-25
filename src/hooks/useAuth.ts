import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { login } from "@/lib/api/auth/login.api";
import { LoginSchemaType, RegisterSchemaType } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api/auth/register.api";

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

  const registerMutation = useMutation({
    mutationFn: (data: RegisterSchemaType) => register(data),
    onSuccess: (response) => {
      router.push("/auth/login");
    },
    onError: () => {},
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
