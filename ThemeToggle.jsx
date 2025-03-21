import React from "react";
import useJobStore from "../store/useJobStore";

export default function ThemeToggle() {
  const darkMode = useJobStore((state) => state.darkMode);
  const toggleDarkMode = useJobStore((state) => state.toggleDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className="text-sm px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-medium"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
