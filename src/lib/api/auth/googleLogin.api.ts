import { api } from "@/lib/axios";
import { AuthResponse } from "@/lib/types";

export const googleLogin = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.post("api/auth/google");

    return data;
  } catch (error) {
    throw error;
  }
};
