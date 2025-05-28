import React, { useCallback, useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleDarkMode = useCallback(() => {
    if (typeof document !== "undefined") {
      const newTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setIsDark(newTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const theme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      document.documentElement.setAttribute("data-theme", theme);
      setIsDark(theme === "dark");
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="group relative w-10 h-10 md:w-9 md:h-9 rounded-full bg-transparent border-none flex items-center justify-center cursor-pointer mx-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-blue-500/10 before:rounded-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500 ease-out text-base-content group-hover:rotate-12 group-hover:text-blue-400 w-5 h-5 md:w-4.5 md:h-4.5"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500 ease-out text-base-content group-hover:-rotate-12 group-hover:text-blue-400 w-5 h-5 md:w-4.5 md:h-4.5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
