import React, { useState, useEffect, useMemo, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

const Gallery: React.FC = () => {
  // Image array - memoized to prevent unnecessary re-renders
  const images = useMemo(
    () => [
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
    ],
    []
  );

  // Lightbox state
  const [index, setIndex] = useState(-1);

  // Prepare slides data for Lightbox - memoized for performance
  const slides = useMemo(
    () =>
      images.map((img) => ({
        src: `photos/gallery/${img}`,
      })),
    [images]
  );

  // Memoized callback for opening lightbox
  const openLightbox = useCallback((imageIndex: number) => {
    setIndex(imageIndex);
  }, []);

  // Memoized callback for closing lightbox
  const closeLightbox = useCallback(() => {
    setIndex(-1);
  }, []);

  return (
    <div className="container" id="gallery" data-aos="fade-up">
      <h2>Gallery</h2>
      <div className="grid grid-cols-4 gap-5 p-5 max-w-6xl mx-auto">
        {images.map((image, i) => (
          <div
            key={`gallery-${i}`}
            onClick={() => openLightbox(i)}
            className="relative overflow-hidden rounded-2xl cursor-pointer shadow-md transition-all duration-200 ease-out aspect-square w-full max-w-64 mx-auto hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={`photos/gallery/${image}`}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-200 hover:scale-102"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={closeLightbox}
        slides={slides}
        plugins={[Counter]}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 9999,
          },
        }}
        animation={{ fade: 300 }}
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
