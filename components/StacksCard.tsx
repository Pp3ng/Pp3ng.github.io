import type React from "react";

import {
  SiC,
  SiCplusplus,
  SiNvidia,
  SiGnubash,
  SiTypescript,
  SiDebian,
  SiApple,
  SiFreebsd,
  SiDocker,
  SiGit,
  SiVim,
  SiTmux,
  SiGnu,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { ZapIcon } from "lucide-react";

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

type MarqueeProps = {
  children: React.ReactNode;
  gap?: string;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    gap = "1rem",
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  const maskDirection = direction === "left" ? "to right" : "to bottom";
  const mask = fade
    ? `linear-gradient(${maskDirection}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
    : undefined;

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        gap,
      }}
    >
      {range(2).map((n) => (
        <div
          key={n}
          style={
            {
              "--gap": gap,
            } as React.CSSProperties
          }
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
            reverse ? "direction-reverse" : ""
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

const StacksCard = () => {
  return (
    <div
      className="flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6 transition-all duration-300 ease-out hover:animate-[glowPulse_3s_ease-in-out_infinite]"
      style={{
        background: "var(--glass-background)",
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        border: "var(--glass-border)",
        boxShadow:
          "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
        outline: "1px solid rgba(255, 255, 255, 0.3)",
        outlineOffset: "-2.7px",
      }}
    >
      <div className="flex items-center gap-2">
        <ZapIcon
          className="size-[18px]"
          style={{ color: "var(--text-color)" }}
        />
        <h2
          className="text-sm font-medium"
          style={{ color: "var(--text-color)" }}
        >
          Tech Stack
        </h2>
      </div>

      {/* First row: scrolling to right */}
      <Marquee gap="30px" className="py-4" fade pauseOnHover>
        <SiC
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiCplusplus
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiNvidia
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiGnubash
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiTypescript
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiDebian
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiApple
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiFreebsd
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiDocker
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiGit
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
      </Marquee>

      {/* Second row: scrolling to left */}
      <Marquee gap="30px" className="py-4" fade pauseOnHover reverse>
        <SiVim
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiTmux
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiGnu
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiMysql
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiRedis
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiMongodb
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiNginx
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiNodedotjs
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiReact
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
        <SiTailwindcss
          className="size-12 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "var(--text-color)" }}
        />
      </Marquee>
    </div>
  );
};

export default StacksCard;
