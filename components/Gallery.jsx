import React, { useEffect } from "react";

const Gallery = () => {
  // The images array is the same as in scripts.js
  const images = [
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
      const lazyLoadImages = () => {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
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
      const handleLightboxClick = (e) => {
        if (e.target.classList.contains("lb-image")) {
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
