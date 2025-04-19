import React from "react";

const SocialLinks = () => {
  return (
    <div className="container" id="Social-Accounts" data-aos="fade-up">
      <h2>Let's Connect</h2>
      <ul className="social-links">
        <li className="social-link-item">
          <div className="social-link-wrapper">
            <a
              href="https://www.instagram.com/pp3ng___"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <span className="social-tooltip">Follow on Instagram</span>
          </div>
        </li>
        <li className="social-link-item">
          <div className="social-link-wrapper">
            <a
              href="https://x.com/Pp3ng_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <span className="social-tooltip">Follow on X</span>
          </div>
        </li>
        <li className="social-link-item">
          <div className="social-link-wrapper">
            <a
              href="https://github.com/Pp3ng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <span className="social-tooltip">Visit my GitHub</span>
          </div>
        </li>
        <li className="social-link-item">
          <div className="social-link-wrapper">
            <a href="mailto:pp3ng@outlook.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <span className="social-tooltip">Send me an email</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
