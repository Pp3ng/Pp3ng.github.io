import React, { useEffect } from "react";

const Projects = () => {
  // Setup project grid
  useEffect(() => {
    const setupProjectGrid = () => {
      const projectsGrid = document.querySelector(".projects-grid");
      if (projectsGrid) {
        projectsGrid.classList.add("project-container");
      }
    };

    setupProjectGrid();
  }, []);

  return (
    <div className="container" id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/PGS"
                target="_blank"
                rel="noopener noreferrer"
              >
                PGS
              </a>
            </h3>
            <p>
              A high-performance static HTTP server meticulously crafted in C++.
              Engineered with a focus on efficiency, it harnesses epoll-based
              event handling and a sophisticated thread pool architecture to
              achieve optimal throughput while maintaining robust resource
              management.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">Network Programming</span>
            <span className="technology-tag">Concurrent Computing</span>
            <span className="technology-tag">System Architecture</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/CinCout"
                target="_blank"
                rel="noopener noreferrer"
              >
                CinCout
              </a>
            </h3>
            <p>
              An intuitive web-based development environment for C/C++
              programming. Features real-time compilation, code execution, and
              integrated analysis tools. Designed to help developers write
              better code through immediate feedback on style and memory
              management.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">Web Development</span>
            <span className="technology-tag">Backend Systems</span>
            <span className="technology-tag">Developer Tools</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/blitz_logger"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blitz_Logger
              </a>
            </h3>
            <p>
              A high-performance, thread-safe logging library built for modern
              C++ applications. Implements lock-free architecture and
              zero-allocation design to minimize overhead while providing
              comprehensive logging capabilities without external dependencies.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">System Programming</span>
            <span className="technology-tag">Concurrent Computing</span>
            <span className="technology-tag">Performance Optimization</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/Mandelbrot-Set"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mandelbrot-Set
              </a>
            </h3>
            <p>
              A comparative study of fractal generation implementing both CPU
              and GPU approaches. Leverages CUDA parallel processing to
              demonstrate significant performance improvements over traditional
              sequential computation while maintaining high precision in
              mathematical calculations.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">Parallel Computing</span>
            <span className="technology-tag">GPU Programming</span>
            <span className="technology-tag">Scientific Computing</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/Pshell"
                target="_blank"
                rel="noopener noreferrer"
              >
                PShell
              </a>
            </h3>
            <p>
              A lightweight shell implementation focusing on essential
              command-line functionality. Features built-in commands, process
              management, and pipeline support while maintaining a clean,
              efficient interface for system interaction and task automation.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">System Programming</span>
            <span className="technology-tag">Process Management</span>
            <span className="technology-tag">Shell Development</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/TinyPacker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiny_Packer
              </a>
            </h3>
            <p>
              An efficient compression utility optimized for small file
              operations. Implements a sliding window algorithm to achieve
              effective compression ratios while maintaining quick processing
              times, particularly suited for configuration files and small text
              documents.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">Algorithm Design</span>
            <span className="technology-tag">Data Compression</span>
            <span className="technology-tag">Memory Management</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/Directory-Analyzer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directory_Analyzer
              </a>
            </h3>
            <p>
              A comprehensive file system analysis tool providing detailed
              insights into directory structures. Generates statistical reports
              on file distributions, sizes, and types while offering an
              efficient interface for understanding complex file system
              hierarchies.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">System Programming</span>
            <span className="technology-tag">File Systems</span>
            <span className="technology-tag">Command Line Tools</span>
          </div>
        </div>

        <div className="project-item">
          <div className="project-description">
            <h3>
              <a
                href="https://github.com/Pp3ng/pdd"
                target="_blank"
                rel="noopener noreferrer"
              >
                pdd
              </a>
            </h3>
            <p>
              A high-performance data duplication and transfer utility built as
              a modern alternative to Unix dd. Features real-time progress
              monitoring, direct I/O operations, and optimized buffer
              management. Implements advanced error handling and verification
              mechanisms while maintaining compatibility with traditional dd
              syntax.
            </p>
          </div>
          <div className="project-technologies">
            <span className="technology-tag">System Programming</span>
            <span className="technology-tag">I/O Operations</span>
            <span className="technology-tag">Performance Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
