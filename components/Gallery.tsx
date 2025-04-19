import React, { useEffect } from "react";
// Import lightbox2 library and its styles
import "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";

// Extend Window interface to include lightbox property
declare global {
  interface Window {
    lightbox: any;
  }
}

const Gallery: React.FC = () => {
  // The images array is the same as in scripts.js
  const images: string[] = [
    "p1.jpg",
    "p12.jpg",
    "p3.jpg",
    "p4.jpg",
    "p5.jpg",
    "p6.jpg",
    "p7.jpg",
    "p8.jpg",
    "p10.jpg",
    "p11.jpg",
    "p13.jpg",
    "p14.jpg",
  ];

  useEffect(() => {
    // This exactly matches the populateGallery function from scripts.js
    const galleryContainer = document.querySelector(".gallery-container");

    if (galleryContainer) {
      // Clear the container
      galleryContainer.innerHTML = "";

      // Add images exactly as in scripts.js
      images.forEach((image, index) => {
        const imagePath = `photos/gallery/${image}`;
        const galleryItem = document.createElement("a");
        galleryItem.setAttribute("href", imagePath);
        galleryItem.setAttribute("data-lightbox", "gallery");

        const img = document.createElement("img");
        img.setAttribute("data-src", imagePath);
        img.setAttribute("alt", `Gallery image ${index + 1}`);
        img.classList.add("gallery-image");

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
      });

      // Initialize lazy loading exactly as in scripts.js
      const lazyLoadImages = (): void => {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.onload = () => {
                img.classList.add("loaded");
              };
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll(".gallery-image[data-src]").forEach((img) => {
          imageObserver.observe(img);
        });
      };

      lazyLoadImages();
    }

    // Configure lightbox exactly as in scripts.js
    if (typeof window.lightbox !== "undefined") {
      window.lightbox.option({
        showImageNumberLabel: false,
        wrapAround: true,
        alwaysShowNavOnTouchDevices: false,
        disableScrolling: true,
        fadeDuration: 300,
        resizeDuration: 300,
        imageFadeDuration: 300,
        closeButtonEnabled: false,
      });

      // Close lightbox on click outside image - exactly as in scripts.js
      const handleLightboxClick = (e: MouseEvent): void => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("lb-image")) {
          window.lightbox.end();
        }
      };

      // First remove any existing listener to avoid duplicates
      document.removeEventListener("click", handleLightboxClick);
      document.addEventListener("click", handleLightboxClick);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="container" id="gallery" data-aos="fade-up">
      <h2>My Gallery</h2>
      <div className="gallery-container">
        {/* The gallery will be populated via DOM manipulation exactly as in scripts.js */}
      </div>
    </div>
  );
};

export default Gallery; 