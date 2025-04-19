import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Smooth scroll to anchor links
  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        window.scrollTo({
          top: target.offsetTop - navHeight - 20,
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
