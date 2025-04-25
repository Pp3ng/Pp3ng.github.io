import React, { useState, useCallback, useEffect, useMemo } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  // Memoized toggle function
  const toggleNavbar = useCallback((): void => {
    setIsActive((prev) => !prev);
  }, []);

  // Optimized scroll event handling with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add transparent class to navbar when scrolling down
  const navbarClass = useMemo(() => {
    return `navbar ${isActive ? "active" : ""} ${
      scrollY > 50 ? "scrolled" : ""
    }`;
  }, [isActive, scrollY]);

  // Optimized smooth scroll with useCallback to avoid recreating function on each render
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");

      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          const navbarElement = document.querySelector(
            ".navbar"
          ) as HTMLElement;
          const navHeight = navbarElement?.offsetHeight || 0;

          // Calculate target position with navbar offset
          const targetPosition =
            (target as HTMLElement).offsetTop - navHeight - 20;

          // Use the native smooth scrolling for better performance
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Close the mobile menu if open
          setIsActive(false);
        }
      }
    },
    []
  );

  // Memoize navigation items to prevent unnecessary re-renders
  const navItems = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#terminal", label: "Terminal" },
      { href: "#journey", label: "Journey" },
      { href: "#passions", label: "Passions" },
      { href: "#gallery", label: "Gallery" },
      { href: "#projects", label: "Projects" },
      { href: "#insights", label: "Insights" },
      { href: "#bookshelf", label: "Books" },
      { href: "#Social-Accounts", label: "Connect" },
    ],
    []
  );

  return (
    <nav className={navbarClass}>
      {navItems.map((item, index) => (
        <a key={`nav-${index}`} href={item.href} onClick={handleNavClick}>
          {item.label}
        </a>
      ))}
      <DarkModeToggle />
      <button
        className="menu-toggle"
        onClick={toggleNavbar}
        aria-label="Toggle navigation menu"
      >
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
