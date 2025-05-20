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
      <motion.div
        className="flex flex-col items-center max-w-[1000px] w-full"
        variants={photoVariants}
      >
        <motion.img
          src="photos/my_photo.jpg"
          alt="My Photo"
          className="w-[220px] rounded-[20px] shadow-lg transition-all hover:shadow-xl mb-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
            intricate interplay between hardware
            <i className="fas fa-microchip mx-[3px]"></i> and software
            <i className="fas fa-file-code mx-[3px]"></i>, I explore the full
            spectrum of technology. Beyond coding, I'm an avid photographer
            capturing life's moments <i className="fas fa-camera mx-[3px]"></i>{" "}
            and a billiards enthusiast seeking the perfect shot{" "}
            <i className="fas fa-circle mx-[3px]"></i>. Here, I share my journey
            through system architecture, creative pursuits, and continuous
            learning
            <i className="fas fa-book mx-[3px]"></i>.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
