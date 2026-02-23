import { api } from "@/lib/axios";
import { LoginResponse, LoginSchemaType } from "@/lib/types";
import { email } from "zod";

export const login = async (loginData: LoginSchemaType): Promise<LoginResponse> => {
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
