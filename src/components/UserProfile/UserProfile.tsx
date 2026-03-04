"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useProfile, useUser } from "@/hooks/useUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import UserProfilePdfList from "./UserProfilePdfList";

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

type FormValues = {
  name: string;
  email: string;
};

const UserProfile = () => {
  const { data, isLoading } = useUser();

  const { updateProfileAsync, updateProfile, isUpdating } = useProfile();

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
    <>
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <h1 className="text-3xl font-bold">My Profile</h1>

        {/* USER CARD */}
        <div className="rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="bg-foreground/15 flex h-20 w-20 items-center justify-center rounded-full text-2xl">
              {data?.data.name.charAt(0)}
            </div>

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

        {/* SETTINGS */}
        <div className="space-y-4 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Account Settings</h2>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full"
                onClick={() =>
                  reset({
                    name: data?.data.name,
                    email: data?.data.email,
                  })
                }
              >
                Edit Profile
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
                {/* Name */}
                <div>
                  <Input
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <DialogFooter>
                  <Button type="submit" disabled={isUpdating} className="w-full">
                    {isUpdating ? "Updating..." : "Save Changes"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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

        <UserProfilePdfList pdfs={data?.data.pdfs ?? []} />
      </div>
    </>
  );
};

export default UserProfile;
