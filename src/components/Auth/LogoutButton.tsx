"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
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
      <Button
        onClick={logoutFn}
        variant={"destructive"}
        className="hover:bg-red-800 dark:hover:bg-red-500"
      >
        <LogOut size={18} /> Logout
      </Button>
    </>
  );
};

export default LogoutButton;
