import { api } from "@/lib/axios";
import { AuthResponse } from "@/lib/types";
import { da } from "zod/v4/locales";

export const getMe = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.get("api/user/me");

    return data;
  } catch (error) {
    throw error;
  }
};
