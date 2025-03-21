import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="space-x-6 font-semibold text-lg">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/dashboard" className="hover:text-yellow-300">Company Dashboard</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
