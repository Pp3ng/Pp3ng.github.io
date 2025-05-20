import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  tooltip: string;
  ariaLabel: string;
}

const SOCIAL_LINKS: SocialLink[] = [
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
];

const socialPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(74, 144, 226, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
  }
`;

const Container = styled.div`
  &.container {
    &#Social-Accounts {
      &[data-aos="fade-up"] {
        /* AOS styles will be handled by AOS library */
      }
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 2rem;
  font-weight: 600;
`;

const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialLinkItem = styled.li`
  position: relative;
  transition: transform 0.3s ease;
`;

const SocialLinkWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--glass-background);
  border-radius: 50%;
  border: var(--glass-border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.3),
      rgba(66, 185, 131, 0.3)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-7.2px);
    box-shadow: 0 13.5px 27px rgba(31, 38, 135, 0.2);
    text-decoration: none;
    animation: ${socialPulse} 1.5s infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  i {
    font-size: 1.8rem;
    color: var(--text-color);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover i {
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;

const SocialTooltip = styled.span`
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--glass-background);
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  border: var(--glass-border);
  box-shadow: var(--box-shadow);
`;

const SocialLinks: React.FC = () => {
  const socialLinks = useMemo(() => SOCIAL_LINKS, []);

  return (
    <Container className="container" id="Social-Accounts" data-aos="fade-up">
      <Title>Let's Connect</Title>
      <SocialLinksList>
        {socialLinks.map((link) => (
          <SocialLinkItem key={link.name}>
            <SocialLinkWrapper>
              <SocialLink
                href={link.url}
                target={link.name !== "email" ? "_blank" : undefined}
                rel={link.name !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
              >
                <i className={link.icon}></i>
              </SocialLink>
              <SocialTooltip>{link.tooltip}</SocialTooltip>
            </SocialLinkWrapper>
          </SocialLinkItem>
        ))}
      </SocialLinksList>
    </Container>
  );
};

export default SocialLinks;
