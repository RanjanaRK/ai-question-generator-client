import { api } from "@/lib/axios";
import { CurrentUserResponse, User } from "@/lib/types";

export const getMe = async (): Promise<User> => {
  const res = await api.get<CurrentUserResponse>("/api/user/me");

  return res.data.user;
};
