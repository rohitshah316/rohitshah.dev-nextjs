"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { FaRegSadCry } from "react-icons/fa";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen gap-4">
      <FaRegSadCry
        className={`text-9xl ${
          theme === "dark" ? "text-blue-900" : "text-blue-400"
        }`}
      />

      <h2 className={`font-bold text-4xl text-center ${theme==='dark'?'text-white':'text-black'}`}>
        404 Not Found
      </h2>

      <p className="text-gray-500 font-semibold">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="px-4 py-2 rounded-3xl bg-blue-600 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}