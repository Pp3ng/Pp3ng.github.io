import React, { useEffect, useCallback } from "react";

interface ProjectData {
  title: string;
  repoUrl: string;
  description: string;
  technologies: string[];
}

const projectsData: ProjectData[] = [
  {
    title: "PGS",
    repoUrl: "https://github.com/Pp3ng/PGS",
    description:
      "A high-performance static HTTP server meticulously crafted in C++. Engineered with a focus on efficiency, it harnesses epoll-based event handling and a sophisticated thread pool architecture to achieve optimal throughput while maintaining robust resource management.",
    technologies: [
      "Network Programming",
      "Concurrent Computing",
      "System Architecture",
    ],
  },
  {
    title: "CinCout",
    repoUrl: "https://github.com/Pp3ng/CinCout",
    description:
      "An intuitive web-based development environment for C/C++ programming. Features real-time compilation, code execution, and integrated analysis tools. Designed to help developers write better code through immediate feedback on style and memory management.",
    technologies: ["Web Development", "Backend Systems", "Developer Tools"],
  },
  {
    title: "Blitz_Logger",
    repoUrl: "https://github.com/Pp3ng/blitz_logger",
    description:
      "A high-performance, thread-safe logging library built for modern C++ applications. Implements lock-free architecture and zero-allocation design to minimize overhead while providing comprehensive logging capabilities without external dependencies.",
    technologies: [
      "System Programming",
      "Concurrent Computing",
      "Performance Optimization",
    ],
  },
  {
    title: "Mandelbrot-Set",
    repoUrl: "https://github.com/Pp3ng/Mandelbrot-Set",
    description:
      "A comparative study of fractal generation implementing both CPU and GPU approaches. Leverages CUDA parallel processing to demonstrate significant performance improvements over traditional sequential computation while maintaining high precision in mathematical calculations.",
    technologies: [
      "Parallel Computing",
      "GPU Programming",
      "Scientific Computing",
    ],
  },
  {
    title: "PShell",
    repoUrl: "https://github.com/Pp3ng/Pshell",
    description:
      "A lightweight shell implementation focusing on essential command-line functionality. Features built-in commands, process management, and pipeline support while maintaining a clean, efficient interface for system interaction and task automation.",
    technologies: [
      "System Programming",
      "Process Management",
      "Shell Development",
    ],
  },
  {
    title: "Tiny_Packer",
    repoUrl: "https://github.com/Pp3ng/TinyPacker",
    description:
      "An efficient compression utility optimized for small file operations. Implements a sliding window algorithm to achieve effective compression ratios while maintaining quick processing times, particularly suited for configuration files and small text documents.",
    technologies: ["Algorithm Design", "Data Compression", "Memory Management"],
  },
  {
    title: "Directory_Analyzer",
    repoUrl: "https://github.com/Pp3ng/Directory-Analyzer",
    description:
      "A comprehensive file system analysis tool providing detailed insights into directory structures. Generates statistical reports on file distributions, sizes, and types while offering an efficient interface for understanding complex file system hierarchies.",
    technologies: ["System Programming", "File Systems", "Command Line Tools"],
  },
  {
    title: "pdd",
    repoUrl: "https://github.com/Pp3ng/pdd",
    description:
      "A high-performance data duplication and transfer utility built as a modern alternative to Unix dd. Features real-time progress monitoring, direct I/O operations, and optimized buffer management. Implements advanced error handling and verification mechanisms while maintaining compatibility with traditional dd syntax.",
    technologies: [
      "System Programming",
      "I/O Operations",
      "Performance Optimization",
    ],
  },
];

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
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-item" key={`project-${index}`}>
            <div className="project-description">
              <h3>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span
                  className="technology-tag"
                  key={`tech-${index}-${techIndex}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
