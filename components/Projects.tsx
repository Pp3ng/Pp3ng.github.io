import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

interface ProjectData {
  title: string;
  repoUrl: string;
  description: string;
}

interface GitHubRepoData {
  stargazers_count: number;
  language: string;
}

interface ProjectCardProps extends ProjectData {
  repoData?: GitHubRepoData;
}

const projectsData: ProjectData[] = [
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
    title: "Pdd",
    repoUrl: "https://github.com/Pp3ng/Pdd",
    description:
      "A modern, POSIX-compatible implementation of the classic Unix dd command, designed to be portable and user-friendly. It provides a real-time progress bar, automatic block size optimization, and improved error handling over the traditional dd command.",
  },
  {
    title: "ChaCha20-Poly1305-AEAD",
    repoUrl: "https://github.com/Pp3ng/ChaCha20-Poly1305-AEAD",
    description:
      "A pure C implementation of the ChaCha20 stream cipher, Poly1305 message authentication code and their combined authenticated encryption with associated data mode. It includes a command-line tool for file encryption and a comprehensive test suite to ensure compliance with RFC 7539.",
  },
];

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const StyledProjectCard = styled.div`
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

const ProjectTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin: 8px 0;
  flex: 1;
`;

const ProjectStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const LanguageTag = styled.span<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.$color};
  }
`;

const StatBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`;

const LANGUAGE_COLORS = {
  "C++": "#f34b7d",
  C: "#555555",
  TypeScript: "#3178c6",
} as const;

const useGitHubData = (projects: ProjectData[]) => {
  const [reposData, setReposData] = useState<Record<string, GitHubRepoData>>(
    {}
  );

  useEffect(() => {
    const fetchRepoData = async (
      repoUrl: string
    ): Promise<GitHubRepoData | null> => {
      try {
        const repoPath = repoUrl.replace("https://github.com/", "");
        const response = await fetch(
          `https://api.github.com/repos/${repoPath}`
        );

        if (!response.ok) return null;

        return await response.json();
      } catch {
        return null;
      }
    };

    const fetchAllReposData = async () => {
      const results = await Promise.allSettled(
        projects.map((project) => fetchRepoData(project.repoUrl))
      );

      const newReposData: Record<string, GitHubRepoData> = {};

      results.forEach((result, index) => {
        if (result.status === "fulfilled" && result.value) {
          const { stargazers_count, language } = result.value;
          newReposData[projects[index].title] = { stargazers_count, language };
        }
      });

      setReposData(newReposData);
    };

    fetchAllReposData();
  }, [projects]);

  return { reposData };
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  repoUrl,
  description,
  repoData,
}) => (
  <StyledProjectCard>
    <ProjectTitle>
      <ProjectLink href={repoUrl} target="_blank" rel="noopener noreferrer">
        {title}
      </ProjectLink>
    </ProjectTitle>

    <ProjectDescription>{description}</ProjectDescription>

    {repoData && (
      <ProjectStats>
        {repoData.language && (
          <LanguageTag $color={LANGUAGE_COLORS[repoData.language] || "#3178c6"}>
            {repoData.language}
          </LanguageTag>
        )}

        <StatBadge>
          <i className="fas fa-star"></i>
          {repoData.stargazers_count}
        </StatBadge>
      </ProjectStats>
    )}
  </StyledProjectCard>
);

const Projects: React.FC = () => {
  const { reposData } = useGitHubData(projectsData);

  return (
    <div className="container" id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            repoData={reposData[project.title]}
          />
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects;
