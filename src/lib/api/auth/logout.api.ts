import { api } from "@/lib/axios";
import { AuthResponse, LoginSchemaType } from "@/lib/types";

export const logout = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.post("api/auth/logout");

    return data;
  } catch (error) {
    throw error;
  }
};
