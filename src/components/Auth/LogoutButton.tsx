"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";

const LogoutButton = () => {
  const { handleLogout } = useAuth();

  const logoutFn = async () => {
    try {
      await handleLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={logoutFn} variant={"destructive"}>
        <LogOut size={18} />
      </Button>
    </>
  );
};

export default LogoutButton;
