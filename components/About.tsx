import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const fullText: string = "Hello,World! I'm ZHOU.";
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const typeWriter = (): void => {
      // Get current index from ref to avoid stale closure
      const currentIndex = indexRef.current;

      if (currentIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(currentIndex));
        indexRef.current++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
    return () => {
      indexRef.current = 0;
    };
  }, []);

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="container"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.img
        src="photos/my_photo.jpg"
        alt="My Photo"
        className="profile-photo"
        variants={itemVariants}
      />
      <motion.h1
        style={{ color: "var(--primary-color)" }}
        variants={itemVariants}
      >
        {displayText}
      </motion.h1>
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
  );
};

export default About;
