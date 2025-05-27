import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import styled from "styled-components";

// Styled components for Navbar
const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin: 0 auto;
  padding: 0.2rem 0.7rem;
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  max-width: 90%;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  /* Dark mode adjustments for navbar */
  [data-theme="dark"] & {
    background: rgba(30, 32, 40, 0.65);
    border: 1px solid rgba(80, 90, 120, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    padding: 0.25rem;
    gap: 2px;
  }

  @media (max-width: 480px) {
    top: 20px;
    padding: 0.2rem;
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  padding: 0.25rem 0.55rem;
  margin: 0 1.5px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 15%;
    width: 70%;
    height: 1.2px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
    transform-origin: right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.active {
    background: rgba(74, 144, 226, 0.15);
    color: var(--primary-color);
    font-weight: 600;
  }

  [data-theme="dark"] &.active {
    background: rgba(100, 160, 255, 0.15);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    transform: translateY(-1px);
  }

  [data-theme="dark"] &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.85em;
    padding: 0.4rem 0.5rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 0.3rem 0.4rem;
  }
`;

const ScrollProgress = styled.div<{ $progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color)
  );
  transform-origin: 0 50%;
  transform: scaleX(${(props) => props.$progress});
  z-index: 1001;
  transition: transform 0.2s ease;
`;

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Optimized scroll event handling with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);

          // Calculate scroll progress
          const windowHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = windowHeight > 0 ? window.scrollY / windowHeight : 0;
          setScrollProgress(progress);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (path: string): void => {
      navigate(path);
    },
    [navigate]
  );

  // Memoize navigation items to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { path: "/", label: "Home" },
      { path: "/playground", label: "Playground" },
      { path: "/works", label: "Works" },
      { path: "/blog", label: "Blog" },
    ],
    []
  );

  return (
    <>
      <ScrollProgress $progress={scrollProgress} />
      <NavbarContainer $scrolled={scrollY > 50} className="navbar">
        {navItems.map((item, index) => (
          <NavLink
            key={`nav-${index}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.path);
            }}
            className={location.pathname === item.path ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            {item.label}
          </NavLink>
        ))}
        <DarkModeToggle />
      </NavbarContainer>
    </>
  );
};

export default Navbar;
