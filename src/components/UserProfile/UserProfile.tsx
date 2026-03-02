"use client";

import { useUser } from "@/hooks/useUser";

type Props = {
  users: {
    id: string;
    name: string;
    email: string;
    plan: string;
    role: string;
    createdAt: string;
  };
};

const UserProfile = () => {
  const { data, isLoading } = useUser();

  console.log(data);

  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold">My Profile</h1>
        {/* User Card */}
        <div className="rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center gap-5">
            {/* Avatar */}

            <div className="bg-foreground/15 flex h-20 w-20 items-center justify-center rounded-full text-2xl">
              {data?.data.name.charAt(0)}
            </div>

            {/* Info */}

            <div>
              <h2 className="text-xl font-semibold">{data?.data.name}</h2>

              <p className="text-muted-foreground">{data?.data.email}</p>

              <div className="mt-2 flex gap-3">
                <span className="rounded-lg border px-3 py-1 text-sm">Plan: {data?.data.plan}</span>

                <span className="rounded-lg border px-3 py-1 text-sm">Role: {data?.data.role}</span>
              </div>

              <p className="text-muted-foreground mt-2 text-sm">
                Joined {new Date(data?.data.createdAt ?? 0).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-5 text-center">
            <p className="text-3xl font-bold">{data?.data.pdfs.length}</p>

            <p className="text-muted-foreground">PDFs Uploaded</p>
          </div>

          <div className="rounded-xl border p-5 text-center">
            <p className="text-3xl font-bold">{data?.data.plan === "FREE" ? "Free" : "Pro"}</p>

            <p className="text-muted-foreground">Current Plan</p>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Account Settings</h2>

          <button className="w-full rounded-lg border p-3 text-left">Change Name</button>

          <button className="w-full rounded-lg border p-3 text-left">Change Password</button>

          <button className="w-full rounded-lg border p-3 text-left">Upgrade Plan</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
