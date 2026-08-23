"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useProfile, useUser } from "@/hooks/useUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import UserProfilePdfList from "./UserProfilePdfList";

type FormValues = {
  name: string;
  email: string;
};

const UserProfile = () => {
  const { data, isLoading } = useUser();

  const { updateProfileAsync, isUpdating } = useProfile();

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  if (isLoading) return <p>Loading...</p>;

  const onSubmit = async (values: FormValues) => {
    await updateProfileAsync(values);
    setOpen(false);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="rounded-2xl border p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="bg-foreground/15 flex h-20 w-20 items-center justify-center rounded-full text-2xl">
            {data?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{data?.name}</h2>

            <p className="text-muted-foreground">{data?.email}</p>

            <div className="mt-2 flex gap-3">
              <span className="rounded-lg border px-3 py-1 text-sm">Plan: {data?.plan}</span>

              <span className="rounded-lg border px-3 py-1 text-sm">Role: {data?.role}</span>
            </div>

            <p className="text-muted-foreground mt-2 text-sm">
              Joined {data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Account Settings</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full"
              onClick={() =>
                reset({
                  name: data?.name ?? "",
                  email: data?.email ?? "",
                })
              }
            >
              Edit Profile
            </Button>
          </DialogTrigger>

          {/* dialog remains the same */}
        </Dialog>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border p-5 text-center">
          <p className="text-3xl font-bold">{data?.pdfs?.length ?? 0}</p>

          <p className="text-muted-foreground">PDFs Uploaded</p>
        </div>

        <div className="rounded-xl border p-5 text-center">
          <p className="text-3xl font-bold">{data?.plan === "FREE" ? "Free" : "Pro"}</p>

          <p className="text-muted-foreground">Current Plan</p>
        </div>
      </div>

      <UserProfilePdfList pdfs={data?.pdfs ?? []} />
    </div>
  );
};

export default UserProfile;
