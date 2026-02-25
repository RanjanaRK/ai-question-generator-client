import { api } from "@/lib/axios";
import { AuthResponse, RegisterSchemaType } from "@/lib/types";

export const register = async (registerData: RegisterSchemaType): Promise<AuthResponse> => {
  try {
    const { data } = await api.post("api/auth/register", {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
