import React, { useMemo } from "react";

interface Book {
  title: string;
  cover: string;
  pdfFilename: string;
}

// Book data moved outside component to prevent recreation on each render
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

// GitHub repository configuration
const GITHUB_CONFIG = {
  username: "Pp3ng",
  repo: "My-bookshelf",
};

const Bookshelf: React.FC = () => {
  // Use memoization to prevent recalculating book data with URLs on each render
  const booksWithUrls = useMemo(() => {
    return bookData.map((book) => ({
      ...book,
      pdfUrl: `https://github.com/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/raw/main/${book.pdfFilename}`,
    }));
  }, []);

  return (
    <section id="bookshelf" className="container" data-aos="fade-up">
      <h2>My Bookshelf</h2>
      <div className="bookshelf-container">
        {booksWithUrls.map((book, index) => (
          <div className="book-item" key={`book-${index}`}>
            <img
              className="book-cover"
              src={book.cover}
              alt={`${book.title} cover`}
              loading="lazy"
            />
            <h3 className="book-title">{book.title}</h3>
            <a
              className="book-link"
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bookshelf;
