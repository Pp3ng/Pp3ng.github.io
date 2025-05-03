import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const ProgressBar = styled.div<{ $progress: number }>`
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

const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  // Optimized scroll handler with requestAnimationFrame for smoother updates
  const handleScroll = useCallback(() => {
    let ticking = false;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Calculate the scroll progress
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const currentProgress =
          totalScroll > 0 ? scrollPosition / totalScroll : 0;

        setProgress(currentProgress);
        ticking = false;
      });

      ticking = true;
    }
  }, []);

  useEffect(() => {
    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return <ProgressBar $progress={progress} />;
};

export default ScrollProgressBar;
