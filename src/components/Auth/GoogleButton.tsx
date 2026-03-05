"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/auth.context";
import { useContext } from "react";

const GoogleButton = () => {
  const router = useRouter();
  // const context = useContext(AuthContext);

  // if (!context) {
  //   throw new Error("useAuth must be used inside AuthProvider");
  // }

  // const { user, setUser } = context;

  const googleHandle = async () => {
    // try {
    //   await handleGoogle();
    // } catch (error) {
    //   console.log(error);
    // }

    window.location.href = "http://localhost:8000/api/auth/google";
    // setUser(user);
    // toast.success("logged in");
    // router.push("/");
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
