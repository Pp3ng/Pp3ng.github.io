import React from "react";

const Passions: React.FC = () => {
  return (
    <div className="container" id="passions" data-aos="fade-up">
      <h2>My Passions</h2>

      <div className="container passion-item">
        <div className="passion-images">
          <img
            src="photos/programming.JPG"
            alt="Programming"
            className="passion-image"
          />
        </div>
        <div className="passion-description">
          <h3>Programming</h3>
          <p>
            I'm passionate about software development and system programming. I
            enjoy exploring different programming paradigms and technologies to
            create efficient solutions. Whether it's building high-performance
            systems, developing web applications, or working on data processing
            tools, I find great satisfaction in turning complex problems into
            elegant code.
          </p>
        </div>
        <div className="passion-images">
          <img src="photos/coding.JPG" alt="Coding" className="passion-image" />
        </div>
      </div>

      <div className="container passion-item">
        <div className="passion-images">
          <img
            src="photos/photography.jpg"
            alt="Photography"
            className="passion-image"
          />
        </div>
        <div className="passion-description">
          <h3>Photography</h3>
          <p>
            Through the lens of my camera, I seek to capture the extraordinary
            in the ordinary. Photography allows me to explore the interplay of
            light and shadow, while documenting the subtle beauty that surrounds
            us. Each frame tells its own story, whether it's the grandeur of
            architecture or the quiet moments in nature.
          </p>
        </div>
        <div className="passion-images">
          <img
            src="photos/photography2.jpg"
            alt="Travel"
            className="passion-image"
          />
        </div>
      </div>

      <div className="container passion-item">
        <div className="passion-images">
          <img
            src="photos/billiards.jpg"
            alt="Billiards"
            className="passion-image"
          />
        </div>
        <div className="passion-description">
          <h3>Billiards</h3>
          <p>
            Billiards represents the perfect blend of precision, strategy, and
            artistry. Each shot is a puzzle to be solved, requiring careful
            consideration of angles, force, and position. Beyond the technical
            aspects, it's a meditative practice that teaches patience and
            continuous improvement.
          </p>
        </div>
        <div className="passion-images">
          <img
            src="photos/billiards2.jpg"
            alt="Billiards"
            className="passion-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Passions;
