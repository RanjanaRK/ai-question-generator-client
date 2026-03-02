import { api } from "@/lib/axios";
import { AuthResponse } from "@/lib/types";

export const getMe = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.patch("api/user/me");

    return data;
  } catch (error) {
    throw error;
  }
};
