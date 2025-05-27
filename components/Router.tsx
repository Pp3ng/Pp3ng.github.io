import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./About";
import InfoCards from "./InfoCards";
import Terminal from "./Terminal";
import Passions from "./Passions";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Insights from "./Insights";
import Bookshelf from "./Bookshelf";

const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen pt-6">{children}</div>
);

const HomePage = () => (
  <PageContainer>
    <About />
    <InfoCards />
    <Passions />
  </PageContainer>
);

const PlaygroundPage = () => (
  <div className="pt-24 pb-4">
    <Terminal />
  </div>
);

const WorksPage = () => (
  <PageContainer>
    <Projects />
    <Gallery />
  </PageContainer>
);

const BlogPage = () => (
  <PageContainer>
    <Insights />
    <Bookshelf />
  </PageContainer>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default AppRouter;
