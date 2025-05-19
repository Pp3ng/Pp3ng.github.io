import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

interface ProjectData {
  title: string;
  repoUrl: string;
  description: string;
}

const projectsData: ProjectData[] = [
  {
    title: "PGS",
    repoUrl: "https://github.com/Pp3ng/PGS",
    description:
      "A high-performance static HTTP server meticulously crafted in C++. Engineered with a focus on efficiency, it harnesses epoll-based event handling and a sophisticated thread pool architecture to achieve optimal throughput while maintaining robust resource management.",
  },
  {
    title: "CinCout",
    repoUrl: "https://github.com/Pp3ng/CinCout",
    description:
      "An intuitive web-based development environment for C/C++ programming. Features real-time compilation, code execution, and integrated analysis tools. Designed to help developers write better code through immediate feedback on style and memory management.",
  },
  {
    title: "Blitz_Logger",
    repoUrl: "https://github.com/Pp3ng/blitz_logger",
    description:
      "A high-performance, thread-safe logging library built for modern C++ applications. Implements lock-free architecture and zero-allocation design to minimize overhead while providing comprehensive logging capabilities without external dependencies.",
  },
  {
    title: "Mandelbrot-Set",
    repoUrl: "https://github.com/Pp3ng/Mandelbrot-Set",
    description:
      "A comparative study of fractal generation implementing both CPU and GPU approaches. Leverages CUDA parallel processing to demonstrate significant performance improvements over traditional sequential computation while maintaining high precision in mathematical calculations.",
  },
  {
    title: "PShell",
    repoUrl: "https://github.com/Pp3ng/Pshell",
    description:
      "A lightweight shell implementation focusing on essential command-line functionality. Features built-in commands, process management, and pipeline support while maintaining a clean, efficient interface for system interaction and task automation.",
  },
  {
    title: "Tiny_Packer",
    repoUrl: "https://github.com/Pp3ng/TinyPacker",
    description:
      "An efficient compression utility optimized for small file operations. Implements a sliding window algorithm to achieve effective compression ratios while maintaining quick processing times, particularly suited for configuration files and small text documents.",
  },
  {
    title: "Directory_Analyzer",
    repoUrl: "https://github.com/Pp3ng/Directory-Analyzer",
    description:
      "A comprehensive file system analysis tool providing detailed insights into directory structures. Generates statistical reports on file distributions, sizes, and types while offering an efficient interface for understanding complex file system hierarchies.",
  },
  {
    title: "pdd",
    repoUrl: "https://github.com/Pp3ng/pdd",
    description:
      "A high-performance data duplication and transfer utility built as a modern alternative to Unix dd. Features real-time progress monitoring, direct I/O operations, and optimized buffer management. Implements advanced error handling and verification mechanisms while maintaining compatibility with traditional dd syntax.",
  },
];

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin: 50px 0;
`;

const ProjectItem = styled.div`
  margin: 0;
  padding: 20px;
  border-radius: 12px;
  background: var(--glass-background);
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  border: var(--glass-border);
  box-shadow: var(--box-shadow);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-align: left;
  outline: 1px solid rgba(255, 255, 255, 0.3);
  outline-offset: -3px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-origin: center bottom;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      45deg,
      rgba(var(--primary-rgb), 0.2),
      rgba(var(--secondary-rgb), 0.2),
      rgba(var(--primary-rgb), 0.2)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(31, 38, 135, 0.25);
  }

  &:hover::before {
    opacity: 1;
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ProjectDescription = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    margin-top: 0;
    text-align: center;
    color: var(--primary-color);
  }

  p {
    text-align: center;
    margin: 10px 0;
  }
`;

const ProjectLink = styled.a`
  position: relative;
  text-decoration: none;
  color: var(--primary-color);
  transition: var(--transition);
  padding: 0.18rem 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.8px;
    background: var(--primary-color);
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
    transform-origin: left;
  }

  &:hover {
    text-decoration: none;
    color: var(--primary-color);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:not(:hover)::after {
    transform-origin: right;
  }
`;

const Projects: React.FC = () => {
  // Memoized setup function
  const setupProjectGrid = useCallback((): void => {
    const projectsGrid = document.querySelector(".projects-grid");
    if (projectsGrid) {
      projectsGrid.classList.add("project-container");
    }
  }, []);

  // Setup project grid
  useEffect(() => {
    setupProjectGrid();
  }, [setupProjectGrid]);

  return (
    <div className="container" id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectItem key={`project-${index}`}>
            <ProjectDescription>
              <h3>
                <ProjectLink
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </ProjectLink>
              </h3>
              <p>{project.description}</p>
            </ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects;
