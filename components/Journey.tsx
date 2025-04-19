import React, { useEffect, useRef } from "react";

const Journey: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Cleanup
    return () => {
      journeyItems.forEach((item) => {
        itemObserver.unobserve(item);
      });
      if (timeline) {
        axisObserver.unobserve(timeline);
      }
    };
  }, []);

  return (
    <div
      className="container compact-section"
      id="journey"
      data-aos="fade-up"
      ref={journeyRef}
    >
      <h2>Life Journey</h2>
      <div className="journey-wrapper">
        <div className="journey-item">
          <div className="journey-dot"></div>
          <div className="journey-date">Spring 2022</div>
          <div className="journey-content">
            <h3>First Encounter with Linux</h3>
            <p>
              Discovered Linux operating system and was captivated by its design
              philosophy. This marked the beginning of my passion for system
              programming and helped me find my true technical interest.
            </p>
            <div className="journey-icon">
              <i className="fab fa-linux"></i>
            </div>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>
          <div className="journey-date">Spring 2021</div>
          <div className="journey-content">
            <h3>Beginning Computer Science Journey</h3>
            <p>
              Formally began studying Computer Science and Engineering at
              university. This marked the start of my systematic exploration of
              computer science, laying a solid foundation for my future
              technical pursuits.
            </p>
            <div className="journey-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>
          <div className="journey-date">Spring 2021</div>
          <div className="journey-content">
            <h3>First Study Abroad Experience</h3>
            <p>
              Embarked on my first international journey as an international
              student. This experience not only broadened my academic horizons
              but also helped me develop independence and cross-cultural
              understanding while adapting to a new environment.
            </p>
            <div className="journey-icon">
              <i className="fas fa-globe-asia"></i>
            </div>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>
          <div className="journey-date">Winter 2019</div>
          <div className="journey-content">
            <h3>Beginning Independent Living</h3>
            <p>
              Moved into a new place and started living independently. Learned
              to manage various aspects of life on my own, enjoying solitude
              while also gaining a deeper appreciation for time spent with
              family and friends.
            </p>
            <div className="journey-icon">
              <i className="fas fa-home"></i>
            </div>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot"></div>
          <div className="journey-date">Winter 2018</div>
          <div className="journey-content">
            <h3>Billiards: From Beginner to Enthusiast</h3>
            <p>
              First encountered billiards and was deeply drawn to its precision
              and strategy. Regular practice became a weekly routine,
              continuously improving techniques. Through this journey, I learned
              the importance of patience and focus.
            </p>
            <div className="journey-icon">
              <i className="fas fa-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
