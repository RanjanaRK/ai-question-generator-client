import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { login } from "@/lib/api/auth/login.api";
import { LoginSchemaType } from "@/lib/types";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (data: LoginSchemaType) => {
    try {
      setLoading(true);

      const response = await login(data);

      setUser((await response).user);
      console.log(user);

      return { response };
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    user,
    loading,
    handleLogin,
  };
};
