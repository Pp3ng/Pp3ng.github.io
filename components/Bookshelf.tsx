import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";

interface Book {
  title: string;
  cover: string;
  pdfFilename: string;
}

interface BookWithUrl extends Book {
  pdfUrl: string;
}

// Book data - moved outside component to prevent recreation on each render
const bookData: Book[] = [
  {
    title: "Advanced Programming in UNIX Environment",
    cover: "BookCovers/APUE.jpg",
    pdfFilename: "Advanced Programming in the UNIX Environment 3rd Edition.pdf",
  },
  {
    title: "TCP/IP Illustrated Volume1",
    cover: "BookCovers/TCPV1.jpg",
    pdfFilename: "TCP-IP-Illustrated-Volume-1-The-Protocols.pdf",
  },
  {
    title: "TCP/IP Illustrated Volume2",
    cover: "BookCovers/TCPV2.jpg",
    pdfFilename: "TCP-IP-Illustrated-Volume-2-The-Implementation.pdf",
  },
  {
    title: "UNIX Network Programming Volume1",
    cover: "BookCovers/UNPV1.jpg",
    pdfFilename: "UNIX Network Programming V1.pdf",
  },
  {
    title: "The Art of UNIX Programming",
    cover: "BookCovers/ART.png",
    pdfFilename: "The Art of Unix Programming.pdf",
  },
  {
    title: "The C++ Programming Language",
    cover: "BookCovers/C++.jpg",
    pdfFilename: "The C++ Programming Language-4th.pdf",
  },
  {
    title: "Linux Command Line And Shell Scripting Bible",
    cover: "BookCovers/CLIBIBLE.jpg",
    pdfFilename: "Linux Command Line And Shell Scripting Bible.pdf",
  },
  {
    title: "Learning the vi and vim Editors",
    cover: "BookCovers/LTVAVE.jpg",
    pdfFilename: "Learning the vi and Vim Editors 8th Edition-2021.pdf",
  },
  {
    title: "The Linux Programming Interface",
    cover: "BookCovers/TLPI.png",
    pdfFilename: "The Linux Programming Interface-2010.pdf",
  },
  {
    title: "Computer Systems A Programmer's Perspective",
    cover: "BookCovers/CSAPP.jpg",
    pdfFilename: "Computer Systems A Programmer's Perspective.pdf",
  },
  {
    title: "Introduction To Algorithms",
    cover: "BookCovers/ITA.jpg",
    pdfFilename: "Introduction to Algorithms 4th.pdf",
  },
  {
    title: "Computer Organization and Design",
    cover: "BookCovers/COAD.jpg",
    pdfFilename: "Computer Organization and Design 5E.pdf",
  },
  {
    title: "Operating System Three Easy Pieces",
    cover: "BookCovers/OSTEP.png",
    pdfFilename: "Operating System Three Easy Pieces.pdf",
  },
  {
    title: "Computer Networking-A Top Down Approach",
    cover: "BookCovers/NW.jpg",
    pdfFilename: "Computer Networking-A Top Down Approach-7th.pdf",
  },
  {
    title: "System Performance",
    cover: "BookCovers/SP.jpg",
    pdfFilename: "Systems Performance-Enterprise And The Cloud.pdf",
  },
  {
    title: "Database System Concepts",
    cover: "BookCovers/DSC.jpg",
    pdfFilename: "Database System Concepts-7th.pdf",
  },
  {
    title: "Compilers Principles Techniques and Tools",
    cover: "BookCovers/COMPILER.jpg",
    pdfFilename: "Compilers Principles Techniques and Tools.pdf",
  },
  {
    title: "Programming Massively Parallel Processors",
    cover: "BookCovers/CUDA.jpg",
    pdfFilename: "Programming Massively Parallel Processors.pdf",
  },
  {
    title: "How Linux Works",
    cover: "BookCovers/HLW.jpg",
    pdfFilename: "How Linux Works.pdf",
  },
  {
    title: "Absolute FreeBSD",
    cover: "BookCovers/AF.jpg",
    pdfFilename: "Absolute FreeBSD 3rd Edition.pdf",
  },
];

// GitHub repository configuration - immutable
const GITHUB_CONFIG = {
  username: "Pp3ng",
  repo: "My-bookshelf",
  baseUrl: "https://github.com/Pp3ng/My-bookshelf/raw/main/",
} as const;

// Pre-calculate books with URLs to avoid recalculation on each render
const booksWithUrls: BookWithUrl[] = bookData.map((book) => ({
  ...book,
  pdfUrl: `${GITHUB_CONFIG.baseUrl}${book.pdfFilename}`,
}));

// Memoized Book component to prevent unnecessary re-renders
const BookComponent = React.memo<{ book: BookWithUrl }>(({ book }) => {
  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      const target = event.target as HTMLImageElement;
      target.style.opacity = "0.5";
      target.alt = `${book.title} cover (failed to load)`;
      console.warn(`Failed to load book cover: ${target.src}`);
    },
    [book.title]
  );

  return (
    <BookItem>
      <BookLink
        href={book.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Download ${book.title}`}
        aria-label={`Download ${book.title} PDF`}
      >
        <BookCover
          src={book.cover}
          alt={`${book.title} cover`}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />
        <BookTitle>{book.title}</BookTitle>
      </BookLink>
    </BookItem>
  );
});

BookComponent.displayName = "BookComponent";

const Bookshelf: React.FC = () => {
  return (
    <BookshelfSection id="bookshelf" className="container" data-aos="fade-up">
      <h2>Bookshelf</h2>
      <BookshelfContainer>
        {booksWithUrls.map((book) => (
          <BookComponent key={book.title} book={book} />
        ))}
      </BookshelfContainer>
    </BookshelfSection>
  );
};

// Keyframes for animations
const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3), 
      0 0 20px rgba(52, 152, 219, 0.2),
      inset 0 0 8px rgba(52, 152, 219, 0.1);
  }
  50% {
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.3),
      inset 0 0 0 1px rgba(255, 255, 255, 0.4), 
      0 0 30px rgba(52, 152, 219, 0.3),
      inset 0 0 12px rgba(52, 152, 219, 0.15);
  }
`;

// Styled Components
const BookshelfSection = styled.section`
  /* This will inherit the .container and data-aos styles from global CSS */
`;

const BookshelfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem 1.25rem;
  padding: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2.5rem 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 2.5rem 1.25rem;
  }
`;

const BookItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.375rem;
  overflow: hidden;
  background: var(--glass-background);
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  border: var(--glass-border);
  border-radius: 0.9375rem;
  box-shadow: 0 0.5rem 2rem rgba(31, 38, 135, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.2),
      rgba(66, 185, 131, 0.2),
      rgba(74, 144, 226, 0.2)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.5rem 2rem rgba(31, 38, 135, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3),
      0 0 1.25rem rgba(52, 152, 219, 0.2),
      inset 0 0 0.5rem rgba(52, 152, 219, 0.1);
    animation: ${glowPulse} 3s ease-in-out infinite;

    &::before {
      opacity: 1;
    }
  }
`;

const BookCover = styled.img`
  max-width: 7.5rem;
  height: auto;
  object-fit: cover;
  border-radius: 0.3125rem;
  margin-bottom: 0.375rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;

  ${BookItem}:hover & {
    transform: perspective(800px) rotateY(10deg) translateZ(20px);
  }

  @media (min-width: 768px) {
    max-width: 8.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 7.5rem;
  }
`;

const BookTitle = styled.h3`
  font-size: 0.9em;
  text-align: center;
  line-height: 1.2;
  margin: 0;
  padding: 0.25rem 0;
  background: linear-gradient(120deg, var(--primary-color), #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  hyphens: auto;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const BookLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.375rem;
  background: transparent;
  border: none;
  border-radius: 0.9375rem;
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  will-change: transform;

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Bookshelf;
