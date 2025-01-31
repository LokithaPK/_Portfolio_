import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 4rem 2rem;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ProjectsContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled(motion.div)`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #0a192f;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectDetails = styled.div`
  text-align: left;
`;

const ProjectTech = styled.p`
  font-size: 0.9rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const ProjectDuration = styled.p`
  font-size: 0.9rem;
  color: #ccd6f6;
`;

const ProjectDescription1 = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ResumeSection = () => {
  return (
    <Container>
      <ProjectsContainer>
        <ProjectTitle>Recent Projects</ProjectTitle>
        <ProjectDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectDetails>
            <h3>Women Safety Analytics</h3>
            <ProjectDescription1>
              Developed an app to help women track their safety and receive
              emergency alerts.
            </ProjectDescription1>
            <ProjectDescription1>
              Used React, Node.js, MongoDB, and Twilio API to build the
              application.
            </ProjectDescription1>
            <ProjectTech>React, Node.js, MongoDB, Twilio API</ProjectTech>
            <ProjectDuration>Duration: 3 months</ProjectDuration>
          </ProjectDetails>
        </ProjectDescription>
        <ProjectDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectDetails>
            <h3>Travel Planner</h3>
            <ProjectDescription1>
              Built a web application for users to plan and manage their travel
              itineraries.
            </ProjectDescription1>
            <ProjectDescription1>
              Utilized the MERN stack and Firebase for the backend and
              authentication.
            </ProjectDescription1>
            <ProjectTech>MERN Stack, Firebase</ProjectTech>
            <ProjectDuration>Duration: 2 months</ProjectDuration>
          </ProjectDetails>

        </ProjectDescription>
        <ProjectDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectDetails>
            <h3>Online Bakery System</h3>
            <ProjectDescription1>
              Built a web application for users to buy their dessert 
              with quality.
            </ProjectDescription1>
            <ProjectDescription1>
              Utilized the MERN stack and form validation in
              react.
            </ProjectDescription1>
            <ProjectTech>MERN Stack</ProjectTech>
            <ProjectDuration>Duration: 2 months</ProjectDuration>
          </ProjectDetails>
          
        </ProjectDescription>
      </ProjectsContainer>
      <DownloadButton href="/Resume.pdf" download="Resume.pdf">
        Download Resume
      </DownloadButton>
    </Container>
  );
};

export default ResumeSection;