import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const COLORS = {
  dark: {
    particles: ["#4a90e2", "#42b983", "#38bdf8", "#22d3ee"],
    links: "#4a90e2",
    grid: "rgba(74, 144, 226, 0.15)",
    background:
      "radial-gradient(ellipse at top, #0f172a 0%, #1e293b 25%, #0f172a 50%, #020617 100%), linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)",
  },
  light: {
    particles: ["#3b82f6", "#10b981", "#6366f1", "#06b6d4"],
    links: "#3b82f6",
    grid: "rgba(59, 130, 246, 0.25)",
    background:
      "radial-gradient(ellipse at top, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 100%), linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)",
  },
};

const PARTICLES_BASE_CONFIG = {
  background: { color: { value: "transparent" } },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 1.2, speed: 0.5 },
    },
  },
  detectRetina: true,
};

const Background: React.FC = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    const updateTheme = () => {
      const newIsDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      if (newIsDark !== isDark) setIsDark(newIsDark);
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [isDark]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const theme = COLORS[isDark ? "dark" : "light"];

  const particlesOptions = useMemo(
    () => ({
      ...PARTICLES_BASE_CONFIG,
      particles: {
        color: { value: theme.particles },
        links: {
          color: theme.links,
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: { default: "bounce" as const },
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 1000 }, value: 50 },
        opacity: {
          value: 0.7,
          random: { enable: true, minimumValue: 0.3 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 2, max: 6 },
          random: { enable: true, minimumValue: 1 },
        },
      },
    }),
    [theme]
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: theme.background,
        transition: "background 0.5s ease",
        overflow: "hidden",
      }}
      className="tech-background"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(${theme.grid} 1px, transparent 1px), linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export default Background;
