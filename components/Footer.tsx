import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center mt-6 text-sm text-text">
      <p>
        &copy; {new Date().getFullYear()} PENN.L.ZHOU | Built with{" "}
        <i className="fas fa-coffee text-[var(--primary-color)] mx-[3px]"></i> &{" "}
        <i className="fas fa-keyboard text-[var(--primary-color)] mx-[3px]"></i>
      </p>
    </footer>
  );
};

export default Footer;
