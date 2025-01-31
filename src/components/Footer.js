import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  a {
    color: #64ffda;
    font-size: 1.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #ccd6f6;
    }
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/LokithaPK" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lokitha-kandasamy-136568259/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:lokitha181@gmail.com">
          <FaEnvelope />
        </a>
      </SocialLinks>
      <FooterText>&copy; copywrite - LOKITHA</FooterText>
    </FooterContainer>
  );
};

export default Footer;
