import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
      <motion.div className="about-photo-container" variants={photoVariants}>
        <motion.img
          src="photos/my_photo.jpg"
          alt="My Photo"
          className="profile-photo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </motion.div>

      <motion.div className="about-text-content" variants={itemVariants}>
        <motion.h1
          className="about-title"
          variants={itemVariants}
          style={{ color: "var(--primary-color)" }}
        >
          {displayText}
          {!titleTypingDone && <span className="cursor">|</span>}
        </motion.h1>

        {titleTypingDone && (
          <div className="role-container">
            <span className="role-prefix">I am a </span>
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
              className="role-text"
            />
          </div>
        )}

        <motion.p className="bio-text" variants={itemVariants}>
          Welcome to my digital space! As an individual fascinated by the
          intricate interplay between hardware
          <i className="fas fa-microchip"></i> and software
          <i className="fas fa-file-code"></i>, I explore the full spectrum of
          technology. Beyond coding, I'm an avid photographer capturing life's
          moments <i className="fas fa-camera"></i> and a billiards enthusiast
          seeking the perfect shot <i className="fas fa-circle"></i>. Here, I
          share my journey through system architecture, creative pursuits, and
          continuous learning
          <i className="fas fa-book"></i>.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
