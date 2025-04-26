import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

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
import SEO from "./components/SEO";

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <ParticlesBackground />
      <ScrollProgressBar />
      <Navbar />

      <main>
        <About />
        <Terminal />
        <Journey />
        <Passions />
        <Gallery />
        <Projects />
        <Insights />
        <Bookshelf />
        <SocialLinks />
      </main>

      <Footer />
      <BackToTop />
    </HelmetProvider>
  );
};

export default App;
