"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center gap-2 rounded-full border px-3 py-2 transition hover:bg-muted"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
        <span className="text-sm">{isDark ? "Dark" : "Light"}</span>
      </button>
    </>
  );
};

export default ModeToggle;
