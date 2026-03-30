"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/auth.context";
import { useContext } from "react";

const GoogleButton = () => {
  const router = useRouter();

  const googleHandle = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
  };

  return (
    <>
      <Button onClick={googleHandle} className="w-full bg-blue-600 hover:bg-blue-800">
        Continue with Google
      </Button>
    </>
  );
};

export default GoogleButton;
