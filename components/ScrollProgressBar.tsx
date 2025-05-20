import React, { useState, useCallback, useRef, useLayoutEffect } from "react";

const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const tickingRef = useRef<boolean>(false);
  const rootRef = useRef<HTMLElement | null>(null);

  const calculateProgress = useCallback(() => {
    if (!rootRef.current) return 0;
    const totalScroll = rootRef.current.scrollHeight - innerHeight;
    const scrollPosition = scrollY;
    return totalScroll > 0 ? scrollPosition / totalScroll : 0;
  }, []);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        setProgress(calculateProgress());
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, [calculateProgress]);

  useLayoutEffect(() => {
    rootRef.current = document.documentElement;
    addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] origin-left z-[1001] transition-transform duration-200 ease-in-out"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ScrollProgressBar;
