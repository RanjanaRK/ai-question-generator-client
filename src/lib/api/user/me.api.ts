import { api } from "@/lib/axios";
import { AuthResponse, LoginSchemaType } from "@/lib/types";

export const getMe = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.get("api/user/me");
    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
};
