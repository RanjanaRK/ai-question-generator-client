"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const GoogleButton = () => {
  const router = useRouter();

  const googleHandle = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
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
