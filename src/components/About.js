import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 100px 20px;
  background: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #64ffda;
  border-bottom: 3px solid #64ffda;
  display: inline-block;
  padding-bottom: 10px;
`;

const SectionContainer = styled.div`
  margin-top: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 15px auto;
  max-width: 600px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 8px rgba(100, 255, 218, 0.2);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.5);
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <Card>
          <strong>🎓 Bachelor of Technology</strong>
          <p>Kongu Engineering College, 2022 - 2026</p>
          <p>Specialization: Information Technology</p>
        </Card>
        <Card>
          <strong>🏫 12th Grade</strong>
          <p>SVN Matric Higher Secondary School(Chithode), 2021 - 2022</p>
          <p>Percentage: 94.8%</p>
        </Card>
        <Card>
          <strong>🏫 10th Grade</strong>
          <p>Kongu Vellalar Matric Higher Secondary School(Perundurai), 2019 - 2020</p>
          <p>Percentage: 82.8%</p>
        </Card>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Achievements</SectionTitle>
        <Card>✔️ Completed a web development bootcamp focusing on React.js.</Card>
        <Card>✔️ Developed a portfolio website showcasing my projects.</Card>
        <Card>✔️ Built a Java-based guessing game demonstrating problem-solving skills.</Card>
      </SectionContainer>

      
    </AboutContainer>
  );
};

export default About;
