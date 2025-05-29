import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";

// pulse animation for social links
const socialPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(74, 144, 226, 0);
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-decoration: none;
  backdrop-filter: blur(8px);
  box-shadow: var(--box-shadow);

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
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-7.2px);
    box-shadow: 0 13.5px 27px rgba(31, 38, 135, 0.2);
    text-decoration: none;
    animation: ${socialPulse} 1.5s infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  i {
    font-size: 1.8rem;
    color: var(--text-color);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover i {
    color: var(--primary-color);
    transform: scale(1.1);
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
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  border: var(--glass-border);
  box-shadow: var(--box-shadow);
  z-index: 10;
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
                  "C/C++ Developer",
                  2000,
                  "Billiards Player",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="font-semibold min-w-[10px]"
                style={{ color: "var(--accent-color)" }}
              />
            </div>
          )}

          <motion.p
            className="text-[1.15rem] leading-relaxed my-2 mx-auto opacity-90 max-w-[800px] text-center"
            variants={itemVariants}
          >
            Welcome to my digital space! As an individual fascinated by the
            intricate interplay between hardware{" "}
            <i className="fas fa-microchip mx-[3px]"></i> and software{" "}
            <i className="fas fa-file-code mx-[3px]"></i>, I explore the full
            spectrum of technology. Beyond coding, I'm an avid photographer
            capturing life's moments <i className="fas fa-camera mx-[3px]"></i>{" "}
            and a billiards enthusiast seeking the perfect shot{" "}
            <i className="fas fa-circle mx-[3px]"></i>. Here, I share my journey
            through system architecture, creative pursuits, and continuous
            learning <i className="fas fa-book mx-[3px]"></i>.
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
                whileHover={{ y: -2 }}
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
                whileHover={{ y: -2 }}
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
                whileHover={{ y: -2 }}
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialTooltip className="social-tooltip">
                Visit my GitHub
              </SocialTooltip>
            </SocialLinkWrapper>

            <SocialLinkWrapper>
              <SocialLink
                href="mailto:pp3ng@outlook.com"
                aria-label="Email"
                whileHover={{ y: -2 }}
              >
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
