import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1.5rem 0;
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: var(--text-color);
  
  i {
    color: var(--primary-color);
    margin: 0 3px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} PENN.L.ZHOU | Built with{" "}
        <i className="fas fa-coffee"></i> & <i className="fas fa-keyboard"></i>
      </p>
    </FooterContainer>
  );
};

export default Footer;
