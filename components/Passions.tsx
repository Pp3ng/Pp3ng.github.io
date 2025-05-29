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
      <h2>My Passions</h2>

      <div className="flex flex-col gap-4 max-w-5xl mx-auto px-4">
        {passionsData.map((passion, index) => (
          <div
            key={`passion-${index}`}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-4">
              <div
                className={`flex items-center gap-4 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={passion.images[0].src}
                      alt={passion.images[0].alt}
                      className="w-40 h-40 object-cover rounded-lg shadow-sm"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-lg" />
                  </div>
                </div>

                <div className="flex-1 px-3">
                  <h3 className="text-lg font-bold mb-2 text-blue-400">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-base-content/90 leading-relaxed">
                    {passion.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={passion.images[1].src}
                      alt={passion.images[1].alt}
                      className="w-40 h-40 object-cover rounded-lg shadow-sm"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 to-blue-500/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passions;
