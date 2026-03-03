import { api } from "@/lib/axios";
import { AuthResponse } from "@/lib/types";

interface UpdateProfileInput {
  name?: string;
  email?: string;
}

export const profileUpdate = async (payload: UpdateProfileInput): Promise<AuthResponse> => {
  try {
    const { data } = await api.patch("api/user/me", payload);

    return data;
  } catch (error) {
    throw error;
  }
};
