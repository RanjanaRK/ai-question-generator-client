"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { loginSchema } from "@/lib/schema/zodSchema";
import { LoginSchemaType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div className="text-center">
        <div className="text-4xl">Login</div>
        <div className="">
          Don’t have an account?{" "}
          <span>
            <Link href={"#"}>Create account</Link>
          </span>
        </div>
        <div>
          <Button className="w-full bg-blue-600 hover:bg-blue-800">
            Continue with Google
          </Button>
        </div>
        <div className="flex">
          <div className="w-full h-0.1  bg-gray-600">gfh</div>
          <div className="">Or</div>
          <div className="w-full h-1 p-1">dfg</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-80">
          <div>
            <Label>Email</Label>
            <Input {...register("email")} />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" {...register("password")} />
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
