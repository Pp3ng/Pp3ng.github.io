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
      <h2 className="text-2xl font-bold text-center mb-6">My Passions</h2>

      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        {passionsData.map((passion, index) => (
          <div
            key={`passion-${index}`}
            className="card bg-base-200/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ease-in-out relative overflow-hidden"
            style={{
              boxShadow:
                "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a90e2]/10 via-[#42b983]/10 to-[#4a90e2]/10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="card-body p-6">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4a90e2]/5 via-[#42b983]/5 to-[#4a90e2]/5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg" />
                  <img
                    src={passion.images[0].src}
                    alt={passion.images[0].alt}
                    className="w-48 h-48 object-cover rounded-lg shadow-md transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-xl relative z-10"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 px-4">
                  <h3 className="text-xl font-semibold mb-3 text-[#4a90e2]">
                    {passion.title}
                  </h3>
                  <p className="text-base text-base-content/80 leading-relaxed">
                    {passion.description}
                  </p>
                </div>
                <div className="flex-shrink-0 group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4a90e2]/5 via-[#42b983]/5 to-[#4a90e2]/5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg" />
                  <img
                    src={passion.images[1].src}
                    alt={passion.images[1].alt}
                    className="w-48 h-48 object-cover rounded-lg shadow-md transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-xl relative z-10"
                    loading="lazy"
                  />
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
