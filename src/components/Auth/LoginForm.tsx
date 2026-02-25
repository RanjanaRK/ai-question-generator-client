"use client";

import { useAuth } from "@/hooks/useAuth";
import { loginSchema } from "@/lib/schema/zodSchema";
import { LoginSchemaType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
  const [show, setShow] = useState(true);

  const { handleLogin, loading, user, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await handleLogin(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <div className="text-4xl font-semibold">Login</div>
          <div className="">
            Don’t have an account?{" "}
            <span>
              <Link href={"/auth/register"} className="text-blue-600 hover:underline">
                Create account
              </Link>
            </span>
          </div>
        </div>
        <GoogleButton />
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <div className="">Or</div>
          <Separator className="flex-1" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-80 space-y-4">
          <div className="">
            <Input placeholder="Email" {...register("email")} />
            {errors.email && (
              <p role="alert" className="text-start text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="text-muted-foreground absolute top-2 right-3 h-4 w-4"
            >
              {show ? <Eye /> : <EyeClosed />}
            </button>

            {errors.password && (
              <p role="alert" className="text-start text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          {error && (
            <p className="text-sm text-red-500">
              {(error as any)?.response?.data?.message || "Login failed"}
            </p>
          )}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
