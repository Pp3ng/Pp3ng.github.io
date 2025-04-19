import React, { useState, useEffect, useRef } from "react";

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const fullText: string = "Hello,World! I'm ZHOU.";
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const typeWriter = (): void => {
      if (indexRef.current < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start the typewriter effect
    typeWriter();

    // Clean up function
    return () => {
      indexRef.current = 0;
    };
  }, []);

  return (
    <div className="container" id="about">
      <img src="photos/my_photo.jpg" alt="My Photo" className="profile-photo" />
      <h1>{displayText}</h1>
      <p className="bio-text">
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
      </p>
    </div>
  );
};

export default About;
