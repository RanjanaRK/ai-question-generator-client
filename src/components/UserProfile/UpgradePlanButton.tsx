"use client";

import { useRouter } from "next/navigation";
import { Crown } from "lucide-react";

const UpgradePlanButton = ({ plan }: { plan: "free" | "pro" }) => {
  const router = useRouter();

  if (plan === "pro") return null;

  return (
    <>
      {" "}
      <button
        onClick={() => router.push("/upgrade-plan")}
        className="flex items-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
      >
        <Crown size={16} />
        Upgrade
      </button>
    </>
  );
};

export default UpgradePlanButton;
