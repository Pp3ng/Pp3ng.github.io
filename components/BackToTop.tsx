import React, { useState, useEffect, useCallback, useMemo } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(window.scrollY > 300);
  };

  // Custom smooth scroll implementation optimized for back-to-top animation
  const scrollToTop = useCallback((): void => {
    const startPosition = window.pageYOffset;
    const duration = 700; // Slightly faster for back-to-top
    let start: number | null = null;

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
  }, []);

  // Memoize the SVG to prevent unnecessary re-renders
  const arrowIcon = useMemo(
    () => (
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
        className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    ),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm text-base-content border border-white/20 rounded-full cursor-pointer z-50 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-90 visible translate-y-0"
          : "opacity-0 invisible translate-y-5 pointer-events-none"
      } hover:opacity-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25`}
    >
      {arrowIcon}
      <span className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-150" />
    </button>
  );
};

export default BackToTop;
