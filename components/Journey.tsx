import React, { useEffect, useRef, useCallback } from "react";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const journeyData: JourneyItem[] = [
  {
    date: "Spring 2022",
    title: "First Encounter with Linux",
    description:
      "Discovered Linux operating system and was captivated by its design philosophy. This marked the beginning of my passion for system programming and helped me find my true technical interest.",
    icon: "fab fa-linux",
  },
  {
    date: "Spring 2021",
    title: "Beginning Computer Science Journey",
    description:
      "Formally began studying Computer Science and Engineering at university. This marked the start of my systematic exploration of computer science, laying a solid foundation for my future technical pursuits.",
    icon: "fas fa-laptop-code",
  },
  {
    date: "Spring 2021",
    title: "First Study Abroad Experience",
    description:
      "Embarked on my first international journey as an international student. This experience not only broadened my academic horizons but also helped me develop independence and cross-cultural understanding while adapting to a new environment.",
    icon: "fas fa-globe-asia",
  },
  {
    date: "Winter 2019",
    title: "Beginning Independent Living",
    description:
      "Moved into a new place and started living independently. Learned to manage various aspects of life on my own, enjoying solitude while also gaining a deeper appreciation for time spent with family and friends.",
    icon: "fas fa-home",
  },
  {
    date: "Winter 2018",
    title: "Billiards: From Beginner to Enthusiast",
    description:
      "First encountered billiards and was deeply drawn to its precision and strategy. Regular practice became a weekly routine, continuously improving techniques. Through this journey, I learned the importance of patience and focus.",
    icon: "fas fa-circle",
  },
];

const Journey: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  // Setup intersection observers with useCallback to avoid recreation on each render
  const setupObservers = useCallback(() => {
    // Observer for journey items
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer for timeline axis animation
    const axisObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline");
          }
        });
      },
      { threshold: 0.05 }
    );

    // Observe all journey items
    const journeyItems = document.querySelectorAll(".journey-item");
    journeyItems.forEach((item) => {
      itemObserver.observe(item);
    });

    // Observe the timeline
    const timeline = document.querySelector(".journey-wrapper");
    if (timeline) {
      axisObserver.observe(timeline);
    }

    // Return cleanup function
    return () => {
      journeyItems.forEach((item) => {
        itemObserver.unobserve(item);
      });
      if (timeline) {
        axisObserver.unobserve(timeline);
      }
    };
  }, []);

  useEffect(() => {
    // Apply observers and get cleanup function
    const cleanup = setupObservers();

    // Run cleanup when component unmounts
    return cleanup;
  }, [setupObservers]);

  return (
    <div
      className="container compact-section"
      id="journey"
      data-aos="fade-up"
      ref={journeyRef}
    >
      <h2>Life Journey</h2>
      <div className="journey-wrapper">
        {journeyData.map((item, index) => (
          <div className="journey-item" key={`journey-${index}`}>
            <div className="journey-dot"></div>
            <div className="journey-date">{item.date}</div>
            <div className="journey-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="journey-icon">
                <i className={item.icon}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
