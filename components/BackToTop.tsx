import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";

// Styled components
const BackToTopButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.$isVisible ? 0.9 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.$isVisible ? 0 : "20px")});
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1000;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(var(--text-rgb), 0.25);
  }
`;

const ArrowIcon = styled.svg`
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  ${BackToTopButton}:hover & {
    transform: translateY(-3px);
  }
`;

const BackToTopCircle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle,
    rgba(var(--text-rgb), 0.1) 0%,
    rgba(var(--text-rgb), 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease-out;
  border-radius: 50%;

  ${BackToTopButton}:hover & {
    transform: scale(2);
  }
`;

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button when page is scrolled down (no throttle)
  const toggleVisibility = useCallback((): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Custom smooth scroll implementation optimized for back-to-top animation
  const scrollToTop = useCallback((): void => {
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
  }, []);

  // Memoize the SVG to prevent unnecessary re-renders
  const arrowIcon = useMemo(
    () => (
      <ArrowIcon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </ArrowIcon>
    ),
    []
  );

  useEffect(() => {
    // Direct scroll event listener without throttling
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <BackToTopButton
      id="back-to-top"
      $isVisible={isVisible}
      onClick={scrollToTop}
      onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      {arrowIcon}
      <BackToTopCircle />
    </BackToTopButton>
  );
};

export default BackToTop;
