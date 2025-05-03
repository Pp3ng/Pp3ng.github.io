import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for DarkModeToggle
const ToggleButton = styled.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-color);
  padding: 0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 0 5px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:hover::before {
    transform: scale(1);
  }

  svg {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    stroke: var(--text-color);
  }

  &:hover svg {
    transform: rotate(30deg);
    color: var(--primary-color);
    stroke: var(--primary-color);
  }

  [data-theme="dark"] &:hover svg {
    transform: rotate(-30deg);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

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
    <ToggleButton onClick={toggleDarkMode} aria-label="Toggle dark mode">
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
          aria-hidden="true"
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
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </ToggleButton>
  );
};

export default DarkModeToggle;
