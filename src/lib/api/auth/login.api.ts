import { api } from "@/lib/axios";
import { AuthResponse, LoginSchemaType } from "@/lib/types";

export const login = async (loginData: LoginSchemaType): Promise<AuthResponse> => {
  try {
    const { data } = await api.post("api/auth/login", {
      email: loginData.email,
      password: loginData.password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
