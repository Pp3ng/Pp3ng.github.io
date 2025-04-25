import React, { useEffect, useState, useCallback } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Throttle function to limit how often the scroll handler fires
  const throttle = (callback: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  };

  // Memoized scroll handler with throttling
  const handleScroll = useCallback(
    throttle(() => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = scrollPosition / totalHeight;
      setScrollProgress(progress);
    }, 16), // Throttle to approximately 60fps (1000ms / 60 ≈ 16ms)
    []
  );

  useEffect(() => {
    // Add scroll event listener with throttled handler
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
  );
};

export default ScrollProgressBar;
