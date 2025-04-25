import React from "react";

interface PassionData {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const passionsData: PassionData[] = [
  {
    title: "Programming",
    description:
      "I'm passionate about software development and system programming. I enjoy exploring different programming paradigms and technologies to create efficient solutions. Whether it's building high-performance systems, developing web applications, or working on data processing tools, I find great satisfaction in turning complex problems into elegant code.",
    images: [
      {
        src: "photos/programming.JPG",
        alt: "Programming",
      },
      {
        src: "photos/coding.JPG",
        alt: "Coding",
      },
    ],
  },
  {
    title: "Photography",
    description:
      "Through the lens of my camera, I seek to capture the extraordinary in the ordinary. Photography allows me to explore the interplay of light and shadow, while documenting the subtle beauty that surrounds us. Each frame tells its own story, whether it's the grandeur of architecture or the quiet moments in nature.",
    images: [
      {
        src: "photos/photography.jpg",
        alt: "Photography",
      },
      {
        src: "photos/photography2.jpg",
        alt: "Travel",
      },
    ],
  },
  {
    title: "Billiards",
    description:
      "Billiards represents the perfect blend of precision, strategy, and artistry. Each shot is a puzzle to be solved, requiring careful consideration of angles, force, and position. Beyond the technical aspects, it's a meditative practice that teaches patience and continuous improvement.",
    images: [
      {
        src: "photos/billiards.jpg",
        alt: "Billiards",
      },
      {
        src: "photos/billiards2.jpg",
        alt: "Billiards",
      },
    ],
  },
];

const Passions: React.FC = () => {
  return (
    <section className="container" id="passions" data-aos="fade-up">
      <h2 className="section-title">My Passions</h2>

      <div className="passion-items-container">
        {passionsData.map((passion, index) => (
          <div className="passion-item" key={`passion-${index}`}>
            <div className="passion-images">
              <img
                src={passion.images[0].src}
                alt={passion.images[0].alt}
                className="passion-image"
                loading="lazy"
              />
            </div>
            <div className="passion-description">
              <h3>{passion.title}</h3>
              <p>{passion.description}</p>
            </div>
            <div className="passion-images">
              <img
                src={passion.images[1].src}
                alt={passion.images[1].alt}
                className="passion-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passions;
