"use client";

import { getMe } from "@/lib/api/user/me.api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],

    queryFn: getMe,

    staleTime: 1000 * 60 * 5,
  });
};
