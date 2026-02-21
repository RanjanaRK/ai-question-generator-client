"use client";

import { useState } from "react";

const UpgradePlan = ({ currentPlan }: { currentPlan: "free" | "pro" }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {" "}
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2">
          {/* FREE PLAN */}
          <div className="rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Free Plan</h2>
            <p className="mb-6 text-3xl font-bold">
              $0<span className="text-sm">/month</span>
            </p>

            <ul className="mb-6 space-y-3 text-sm">
              <li>✔ 5 PDF uploads per month</li>
              <li>✔ Basic MCQ generation</li>
              <li>✔ Limited Q&A</li>
              <li>✖ No export</li>
            </ul>

            {currentPlan === "free" ? (
              <button disabled className="w-full rounded-xl py-2 text-gray-600">
                Current Plan
              </button>
            ) : (
              <button className="w-full rounded-xl border py-2">Downgrade</button>
            )}
          </div>

          {/* PRO PLAN */}
          <div className="relative rounded-2xl border-2 border-indigo-600 p-8 shadow-lg">
            <span className="absolute top-4 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs">
              Most Popular
            </span>

            <h2 className="mb-4 text-xl font-semibold">Pro Plan</h2>
            <p className="mb-6 text-3xl font-bold">
              $19<span className="text-sm">/month</span>
            </p>

            <ul className="mb-6 space-y-3 text-sm">
              <li>✔ Unlimited PDF uploads</li>
              <li>✔ Advanced MCQ generation</li>
              <li>✔ Detailed Q&A</li>
              <li>✔ Export as PDF</li>
              <li>✔ Priority processing</li>
            </ul>

            {currentPlan === "pro" ? (
              <button disabled className="w-full rounded-xl py-2 text-indigo-600">
                Current Plan
              </button>
            ) : (
              <button
                // onClick={handleUpgrade}
                className="w-full rounded-xl bg-indigo-600 py-2 transition hover:bg-indigo-700"
              >
                {loading ? "Upgrading..." : "Upgrade to Pro"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradePlan;
