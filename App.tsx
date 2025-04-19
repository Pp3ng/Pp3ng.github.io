import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Terminal from "./components/Terminal";
import Journey from "./components/Journey";
import Passions from "./components/Passions";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Insights from "./components/Insights";
import Bookshelf from "./components/Bookshelf";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Terminal />
      <Journey />
      <Passions />
      <Gallery />
      <Projects />
      <Insights />
      <Bookshelf />
      <SocialLinks />
      <Footer />
      <BackToTop />
      <ScrollProgressBar />
      <ParticlesBackground />
    </>
  );
};

export default App;
