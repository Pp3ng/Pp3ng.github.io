import React, { useMemo } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  tooltip: string;
  ariaLabel: string;
}

const SocialLinks: React.FC = () => {
  // Use useMemo to prevent recreation of the links array on each render
  const socialLinks = useMemo<SocialLink[]>(
    () => [
      {
        name: "instagram",
        url: "https://www.instagram.com/pp3ng___",
        icon: "fa-brands fa-instagram",
        tooltip: "Follow on Instagram",
        ariaLabel: "Instagram",
      },
      {
        name: "twitter",
        url: "https://x.com/Pp3ng_",
        icon: "fa-brands fa-x-twitter",
        tooltip: "Follow on X",
        ariaLabel: "Twitter",
      },
      {
        name: "github",
        url: "https://github.com/Pp3ng",
        icon: "fa-brands fa-github",
        tooltip: "Visit my GitHub",
        ariaLabel: "GitHub",
      },
      {
        name: "email",
        url: "mailto:pp3ng@outlook.com",
        icon: "fa-solid fa-envelope",
        tooltip: "Send me an email",
        ariaLabel: "Email",
      },
    ],
    []
  );

  return (
    <div className="container" id="Social-Accounts" data-aos="fade-up">
      <h2>Let's Connect</h2>
      <ul className="social-links">
        {socialLinks.map((link) => (
          <li className="social-link-item" key={link.name}>
            <div className="social-link-wrapper">
              <a
                href={link.url}
                target={link.name !== "email" ? "_blank" : undefined}
                rel={link.name !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
              >
                <i className={link.icon}></i>
              </a>
              <span className="social-tooltip">{link.tooltip}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
