import React, { useEffect } from "react";

const ScrollProgressBar: React.FC = () => {
  useEffect(() => {
    // Create a progress bar element exactly like in scripts.js
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.appendChild(progressBar);

    // Scroll handler matching the functionality in scripts.js
    const handleScroll = (): void => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / windowHeight;
      progressBar.style.transform = `scaleX(${scrolled})`;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  // Return null because the DOM element is created imperatively
  return null;
};

export default ScrollProgressBar; 