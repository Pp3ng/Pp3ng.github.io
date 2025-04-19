import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsActive(!isActive);
  };

  // Smooth scroll to anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const navbarElement = document.querySelector(".navbar") as HTMLElement;
        const navHeight = navbarElement?.offsetHeight || 0;
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - navHeight - 20,
          behavior: "smooth",
        });

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
      <button className="menu-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar; 