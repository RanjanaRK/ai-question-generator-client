import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <>
      <Button
        // onClick={handleLogout}
        variant={"destructive"}
      >
        <LogOut size={18} />
      </Button>
    </>
  );
};

export default LogoutButton;
