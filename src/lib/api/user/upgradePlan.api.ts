import { api } from "@/lib/axios";
import { AuthResponse, UpgradePlanResponse } from "@/lib/types";

interface UpgradePlanType {
  plan: string;
}

export const upgradePlan = async (payload: UpgradePlanType): Promise<UpgradePlanResponse> => {
  try {
    const { data } = await api.patch("api/user/plan/upgrade", payload);

    return data;
  } catch (error) {
    throw error;
  }
};
