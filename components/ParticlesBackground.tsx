import React, { useEffect } from "react";

// Define the window.particlesJS interface
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // This ensures the particles-js div exists before initialization
    const particlesContainer = document.getElementById("particles-js");

    // Use a timeout to ensure the DOM is fully ready and libraries are loaded
    const timer = setTimeout(() => {
      if (typeof window.particlesJS !== "undefined" && particlesContainer) {
        const particlesConfig = {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: [
                "#1e3c72", // Deep blue
                "#2a5298", // Strong blue
                "#4caf50", // Vibrant green
                "#006400", // Dark green
                "#00bfae", // Teal
                "#0288d1", // Bright blue
              ],
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3498db",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 250,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 300,
                duration: 0.4,
                speed: 1,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          fps_limit: 60,
        };

        // Initialize particlesJS with the exact same configuration as in scripts.js
        window.particlesJS("particles-js", particlesConfig);
        console.log("Particles JS initialized");
      } else {
        console.error(
          "particlesJS not loaded or particles-js container not found"
        );
      }
    }, 1000); // Wait for 1 second to ensure everything is loaded

    return () => clearTimeout(timer);
  }, []);

  // Make sure the div takes up the entire screen
  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default ParticlesBackground;
