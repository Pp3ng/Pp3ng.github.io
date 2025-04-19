import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Button styles based on state
  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: hovered ? "#2980b9" : "#3498db",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    boxShadow: hovered
      ? "0 12px 40px rgba(31, 38, 135, 0.2)"
      : "0 8px 32px rgba(31, 38, 135, 0.15)",
    transition: "all 0.3s ease",
    zIndex: 9999,
    opacity: visible ? 1 : 0,
    visibility: visible ? "visible" : "hidden",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
  };

  const svgStyle: React.CSSProperties = {
    width: "60%",
    height: "60%",
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={buttonStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={svgStyle}
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default BackToTop; 