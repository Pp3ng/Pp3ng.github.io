import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "hexagon" | "circle" | "square" | "triangle";
}

const GeometricBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas setup
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Theme-aware gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      if (isDark) {
        gradient.addColorStop(0, "#0f172a");
        gradient.addColorStop(0.3, "#1e293b");
        gradient.addColorStop(0.6, "#334155");
        gradient.addColorStop(1, "#1a1d24");
      } else {
        gradient.addColorStop(0, "#f8fafc");
        gradient.addColorStop(0.3, "#f1f5f9");
        gradient.addColorStop(0.6, "#e2e8f0");
        gradient.addColorStop(1, "#cbd5e1");
      }

      return gradient;
    };

    // Initialize geometric particles
    const initParticles = (): Particle[] => {
      const particles: Particle[] = [];
      const particleCount = 10;
      const shapes: Array<"hexagon" | "circle" | "square" | "triangle"> = [
        "hexagon",
        "circle",
        "square",
        "triangle",
      ];

      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const colors = isDark ? ["#4a90e2", "#42b983"] : ["#4a90e2", "#42b983"];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 35 + 25,
          opacity: Math.random() * 0.12 + 0.03,
          color: colors[i % colors.length],
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          shape: shapes[i % shapes.length],
        });
      }

      return particles;
    };

    // Drawing functions for each shape
    const drawHexagon = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = size * Math.cos(angle);
        const y = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const drawTriangle = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(-size * 0.866, size * 0.5);
      ctx.lineTo(size * 0.866, size * 0.5);
      ctx.closePath();
    };

    const drawCircle = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
    };

    const drawSquare = (ctx: CanvasRenderingContext2D, size: number) => {
      const halfSize = size * 0.7;
      ctx.beginPath();
      ctx.rect(-halfSize, -halfSize, halfSize * 2, halfSize * 2);
    };

    // Initialize particles
    particlesRef.current = initParticles();

    // Animation loop
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Boundary wrapping
        if (particle.x < -particle.size)
          particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size)
          particle.x = -particle.size;
        if (particle.y < -particle.size)
          particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size)
          particle.y = -particle.size;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = ((150 - distance) / 150) * 0.01;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Limit velocity
        const maxSpeed = 1;
        const speed = Math.sqrt(
          particle.vx * particle.vx + particle.vy * particle.vy
        );
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = particle.opacity;
        ctx.strokeStyle = particle.color;
        ctx.fillStyle = particle.color;
        ctx.lineWidth = 2;

        // Draw based on shape
        switch (particle.shape) {
          case "hexagon":
            drawHexagon(ctx, particle.size * 0.6);
            ctx.stroke();
            break;
          case "circle":
            drawCircle(ctx, particle.size);
            ctx.fill();
            break;
          case "square":
            drawSquare(ctx, particle.size);
            ctx.stroke();
            break;
          case "triangle":
            drawTriangle(ctx, particle.size * 0.6);
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // Visibility handling
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="geometric-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default GeometricBackground;
