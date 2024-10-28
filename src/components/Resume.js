import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeImage = styled.img`
  width: 80%; 
  max-width: 1200px; 
  height: auto;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DownloadButton = styled.a`
  display: inline-block; 
  padding: 0.5rem 1rem; 
  background-color: #64ffda;
  color: #0a192f;
  border-radius: 5px;
  font-size: 1rem; 
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem; 
  
  &:hover {
    background-color: #52e0c4;
  }
`;

const ResumeSection = () => {
  return (
    <ResumeContainer>
      <ResumeImage src="/Resume.png" alt="My Resume" />
      <DownloadButton href="/Resume.pdf" download="Resume.pdf">
        Download PDF
      </DownloadButton>
    </ResumeContainer>
  );
};

export default ResumeSection;
