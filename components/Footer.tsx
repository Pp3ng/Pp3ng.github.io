import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} PENN ZHOU | Built with{" "}
        <i className="fas fa-coffee"></i> &<i className="fas fa-keyboard"></i>
      </p>
    </footer>
  );
};

export default Footer; 