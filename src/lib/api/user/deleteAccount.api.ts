import { api } from "@/lib/axios";
import { AuthResponse } from "@/lib/types";

export const deleteAccount = async (): Promise<AuthResponse> => {
  try {
    const { data } = await api.delete("api/user/account");

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
};
