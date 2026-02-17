"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="hover:bg-muted flex items-center justify-center gap-2 rounded-full border px-3 py-2 transition"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}

        <span className="hidden text-sm sm:inline">
          {isDark ? "Dark" : "Light"}
        </span>
      </button>
    </>
  );
};

export default ModeToggle;
