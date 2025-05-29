import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import AppRouter from "./components/Router";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import GeometricBackground from "./components/Background";
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
      <HashRouter>
        <SEO />
        <GeometricBackground />
        <ScrollProgressBar />
        <Navbar />

        <main>
          <AppRouter />
        </main>

        <Footer />
        <BackToTop />
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;
