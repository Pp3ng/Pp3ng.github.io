import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button when page is scrolled down
  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Custom smooth scroll implementation optimized for back-to-top animation
  const scrollToTop = (): void => {
    const startPosition = window.pageYOffset;
    const duration = 700; // Slightly faster for back-to-top
    let start: number | null = null;

    // Animation step function using requestAnimationFrame
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Custom easing for back-to-top (more acceleration at start)
      const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

      window.scrollTo({
        top: startPosition * (1 - easeOutQuint(percentage)),
        behavior: "auto", // Using custom animation
      });

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      id="back-to-top"
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="back-to-top-icon"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      <span className="back-to-top-circle"></span>
    </button>
  );
};

export default BackToTop;
