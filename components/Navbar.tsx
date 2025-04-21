import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsActive(!isActive);
  };

  // Smooth scroll to anchor links with optimized animation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const navbarElement = document.querySelector(".navbar") as HTMLElement;
        const navHeight = navbarElement?.offsetHeight || 0;

        // Calculate target position with navbar offset
        const targetPosition =
          (target as HTMLElement).offsetTop - navHeight - 20;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;

        // Optimized animation duration and settings
        const duration = 800;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);

          // Enhanced easing function for smooth navigation
          const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

          window.scrollTo({
            top: startPosition + distance * easeInOutCubic(percentage),
            behavior: "auto", // Using custom animation instead of browser default
          });

          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);

        // Close the mobile menu if open
        if (isActive) {
          setIsActive(false);
        }
      }
    }
  };

  return (
    <div className={`navbar ${isActive ? "active" : ""}`}>
      <a href="#about" onClick={handleNavClick}>
        About
      </a>
      <a href="#terminal" onClick={handleNavClick}>
        Terminal
      </a>
      <a href="#journey" onClick={handleNavClick}>
        Journey
      </a>
      <a href="#passions" onClick={handleNavClick}>
        Passions
      </a>
      <a href="#gallery" onClick={handleNavClick}>
        Gallery
      </a>
      <a href="#projects" onClick={handleNavClick}>
        Projects
      </a>
      <a href="#insights" onClick={handleNavClick}>
        Insights
      </a>
      <a href="#bookshelf" onClick={handleNavClick}>
        Books
      </a>
      <a href="#Social-Accounts" onClick={handleNavClick}>
        Connect
      </a>
      <DarkModeToggle />
      <button className="menu-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar;
