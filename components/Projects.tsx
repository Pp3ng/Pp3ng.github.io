import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

interface ProjectData {
  title: string;
  repoUrl: string;
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
}

interface GitHubRepoData {
  stargazers_count: number;
  forks_count: number;
  language: string;
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
  gap: 24px;
  margin: 50px 0;
`;

const ProjectCard = styled.div`
  background: var(--glass-background);
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  border: var(--glass-border);
  border-radius: 6px;
  padding: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  outline: 1px solid rgba(255, 255, 255, 0.3);
  outline-offset: -3px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.2),
      rgba(66, 185, 131, 0.2),
      rgba(74, 144, 226, 0.2)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px rgba(52, 152, 219, 0.2),
      inset 0 0 8px rgba(52, 152, 219, 0.1);
  }

  &:hover::before {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  flex: 1;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: var(--primary-color);
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin: 8px 0;
  flex: 1;
`;

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const LanguageDot = styled.span<{ color?: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#3178c6"};
  margin-right: 4px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Projects: React.FC = () => {
  const [reposData, setReposData] = useState<{ [key: string]: GitHubRepoData }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchRepoData = useCallback(async (repoUrl: string) => {
    try {
      const repoPath = repoUrl.replace("https://github.com/", "");
      const response = await fetch(`https://api.github.com/repos/${repoPath}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching repo data:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchAllReposData = async () => {
      setIsLoading(true);
      const reposDataPromises = projectsData.map((project) =>
        fetchRepoData(project.repoUrl)
      );

      const results = await Promise.all(reposDataPromises);
      const newReposData: { [key: string]: GitHubRepoData } = {};

      results.forEach((data, index) => {
        if (data) {
          newReposData[projectsData[index].title] = {
            stargazers_count: data.stargazers_count,
            forks_count: data.forks_count,
            language: data.language,
          };
        }
      });

      setReposData(newReposData);
      setIsLoading(false);
    };

    fetchAllReposData();
  }, [fetchRepoData]);

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      "C++": "#f34b7d",
      C: "#555555",
      TypeScript: "#3178c6",
    };
    return colors[language] || "#3178c6";
  };

  return (
    <div className="container" id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project, index) => {
          const repoData = reposData[project.title];
          return (
            <ProjectCard key={`project-${index}`}>
              <ProjectHeader>
                <ProjectTitle>
                  <ProjectLink
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </ProjectLink>
                </ProjectTitle>
              </ProjectHeader>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectFooter>
                {repoData?.language && (
                  <StatItem>
                    <LanguageDot color={getLanguageColor(repoData.language)} />
                    {repoData.language}
                  </StatItem>
                )}
                {repoData?.stargazers_count !== undefined && (
                  <StatItem>
                    <i className="fas fa-star"></i>
                    {repoData.stargazers_count}
                  </StatItem>
                )}
                {repoData?.forks_count !== undefined && (
                  <StatItem>
                    <i className="fas fa-code-fork"></i>
                    {repoData.forks_count}
                  </StatItem>
                )}
              </ProjectFooter>
            </ProjectCard>
          );
        })}
      </ProjectsGrid>
    </div>
  );
};

export default Projects;
