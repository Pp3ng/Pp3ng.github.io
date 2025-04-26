import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

// Add inline style reset to ensure Lightbox images are not affected by global CSS
const LightboxStyleReset = () => {
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style");

    // Add high priority style rules
    style.innerHTML = `
      [data-yarl-portal] [data-yarl-slide] img,
      body [data-yarl-portal] [data-yarl-slide] img,
      html body [data-yarl-portal] [data-yarl-slide] img {
        width: auto !important;
        height: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: contain !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        transform: none !important;
        transition: none !important;
        position: static !important;
        z-index: auto !important;
        border: none !important;
        cursor: default !important;
      }
      
      [data-yarl-portal] [data-yarl-slide] img:hover,
      body [data-yarl-portal] [data-yarl-slide] img:hover {
        transform: none !important;
        box-shadow: none !important;
      }
      
      [data-yarl-container] {
        z-index: 9999 !important;
      }
    `;

    // Append style element to head
    document.head.appendChild(style);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

const Gallery: React.FC = () => {
  // Image array
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

  // Lightbox state
  const [index, setIndex] = useState(-1);

  // Prepare slides data for Lightbox
  const slides = images.map((img) => ({
    src: `photos/gallery/${img}`,
  }));

  return (
    <div className="container" id="gallery" data-aos="fade-up">
      {/* Inject style reset component */}
      <LightboxStyleReset />

      <h2>My Gallery</h2>
      <div className="gallery-container">
        {images.map((image, i) => (
          <div className="gallery-item" key={i} onClick={() => setIndex(i)}>
            <img
              src={`photos/gallery/${image}`}
              alt={`Gallery image ${i + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Fullscreen, Counter]}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 9999,
          },
        }}
        animation={{ fade: 300 }}
        zoom={{
          maxZoomPixelRatio: 5,
          scrollToZoom: true,
        }}
        render={{
          slide: ({ slide }) => (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={slide.src}
                alt="Gallery photo"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: 0,
                  boxShadow: "none",
                  border: "none",
                }}
              />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Gallery;
