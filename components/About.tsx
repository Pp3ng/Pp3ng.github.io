import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";

const socialPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(74, 144, 226, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
  }
`;

const SocialLinkWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .social-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const SocialLink = styled(motion.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--glass-background);
  border-radius: 50%;
  border: var(--glass-border);
  overflow: hidden;
  text-decoration: none;
  backdrop-filter: blur(8px);
  box-shadow: var(--box-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.3),
      rgba(66, 185, 131, 0.3)
    );
    opacity: 0;
    border-radius: 50%;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(31, 38, 135, 0.2);
    text-decoration: none;
    animation: ${socialPulse} 1s ease-out infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  i {
    font-size: 1.8rem;
    color: var(--text-color);
    z-index: 1;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  &:hover i {
    color: var(--primary-color);
    transform: scale(1.05);
  }
`;

const SocialTooltip = styled.span`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--glass-background);
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  border: var(--glass-border);
  box-shadow: var(--box-shadow);
  z-index: 10;
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
`;

const About: React.FC = () => {
  // Main typing animation state
  const [displayText, setDisplayText] = useState<string>("");
  const fullText: string = "Hello,World! I'm ZHOU.";
  const indexRef = useRef<number>(0);
  const [titleTypingDone, setTitleTypingDone] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Typewriter effect for the main title
  useEffect(() => {
    const typeWriter = (): void => {
      const currentIndex = indexRef.current;

      if (currentIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(currentIndex));
        indexRef.current++;

        const delay = [",", ".", "!"].includes(fullText.charAt(currentIndex))
          ? 300
          : 100;
        setTimeout(typeWriter, delay);
      } else {
        setTitleTypingDone(true);
      }
    };

    typeWriter();

    return () => {
      indexRef.current = 0;
    };
  }, []);

  return (
    <motion.div
      className="container"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center max-w-[1000px] w-full"
        variants={photoVariants}
      >
        <motion.img
          src="photos/my_photo.jpg"
          alt="My Photo"
          className="w-[220px] rounded-[20px] shadow-lg mb-3"
          whileHover={{
            scale: 1.03,
            y: -3,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
        />

        <motion.div className="text-center" variants={itemVariants}>
          <motion.h1
            className="text-[2.8rem] mb-2 font-bold tracking-[0.5px]"
            variants={itemVariants}
            style={{ color: "var(--primary-color)" }}
          >
            {displayText}
            {!titleTypingDone && (
              <span className="font-light animate-[blink_0.7s_infinite]">
                |
              </span>
            )}
          </motion.h1>

          {titleTypingDone && (
            <div className="my-2 mb-3 text-[1.6rem] flex items-center justify-center min-h-[30px]">
              <span className="mr-2.5 font-light opacity-85">I am a </span>
              <TypeAnimation
                sequence={[
                  "System Programmer",
                  2000,
                  "Unix Enthusiast",
                  2000,
                  "Billiards Player",
                  2000,
                  "Terminal Ninja",
                  2000,
                  "Continuous Learner",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="font-semibold min-w-[10px]"
                style={{ color: "#29be56" }}
              />
            </div>
          )}

          <motion.p
            className="text-[1.15rem] leading-relaxed my-2 mx-auto opacity-90 max-w-[800px] text-center"
            variants={itemVariants}
          >
            Hi there! I'm an individual passionate about computer science and
            engineering <i className="fas fa-laptop mx-[3px]"></i>, exploring
            everything from hardware{" "}
            <i className="fas fa-microchip mx-[3px]"></i> to software{" "}
            <i className="fas fa-file-code mx-[3px]"></i>. I love diving deep
            into system architecture and understanding how things work at every
            level <i className="fas fa-book mx-[3px]"></i>. When I'm not coding,
            you'll find me behind a camera capturing moments{" "}
            <i className="fas fa-camera mx-[3px]"></i> or at the billiards table
            perfecting my shots <i className="fas fa-circle mx-[3px]"></i>. I
            live by Steve Jobs' wisdom:{" "}
            <em>
              &quot;Your time is limited, so don't waste it living someone
              else's life&quot;
            </em>
            . Welcome to my digital space!
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-6"
            variants={itemVariants}
          >
            <SocialLinkWrapper>
              <SocialLink
                href="https://www.instagram.com/pp3ng___"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </SocialLink>
              <SocialTooltip className="social-tooltip">
                Follow on Instagram
              </SocialTooltip>
            </SocialLinkWrapper>

            <SocialLinkWrapper>
              <SocialLink
                href="https://x.com/Pp3ng_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter"></i>
              </SocialLink>
              <SocialTooltip className="social-tooltip">
                Follow on X
              </SocialTooltip>
            </SocialLinkWrapper>

            <SocialLinkWrapper>
              <SocialLink
                href="https://github.com/Pp3ng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialTooltip className="social-tooltip">
                Visit my GitHub
              </SocialTooltip>
            </SocialLinkWrapper>

            <SocialLinkWrapper>
              <SocialLink href="mailto:pp3ng@outlook.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </SocialLink>
              <SocialTooltip className="social-tooltip">
                Send me an email
              </SocialTooltip>
            </SocialLinkWrapper>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
