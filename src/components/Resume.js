import React, { useState } from 'react';
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
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const ProjectDescription = styled(motion.div)`
  padding: 1rem;
  background-color: #112240;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  animation: glowing 1.5s infinite alternate;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @keyframes glowing {
    0% {
      border-color: #64ffda;
    }
    100% {
      border-color: #52e0c4;
    }
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

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: #64ffda;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    color: #52e0c4;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: -40px;
`;

const NextButton = styled(NavigationButton)`
  right: -40px;
`;

const projects = [
  {
    title: 'Women Safety Analytics',
    description: 'The app allows women to track their safety by providing real-time location sharing, SOS emergency alerts, and trusted contacts integration. It includes features such as automated distress signals, voice activation for emergency mode, and a panic button that instantly notifies emergency contacts and local authorities. The app may also offer incident reporting, and community-based alerts to keep users informed about potentially unsafe areas.',
    tech: 'React, Node.js, MongoDB, Twilio API',
    duration: 'Duration: 3 months'
  },
  {
    title: 'Travel Planner',
    description: 'The web application allows users to create, customize, and manage their travel itineraries with features such as destination recommendations, scheduling, budget tracking, and real-time updates. It includes integrations for transportation, accommodation bookings, and local attractions. Users can collaborate on itineraries with friends and family and store important documents securely. The app may also provide AI-based suggestions for optimizing travel plans based on preferences and past trips.',
    tech: 'MERN Stack, Firebase',
    duration: 'Duration: 2 months'
  },
  {
    title: 'Online Bakery System',
    description: 'The web application allows users to browse, select, and purchase high-quality desserts. It includes features such as detailed product descriptions, customer reviews, secure payment options, and delivery tracking. The platform may also offer personalized recommendations based on user preferences, seasonal specials, and the ability to customize orders. Additionally, quality assurance measures ensure that users receive fresh and premium desserts.',
    tech: 'MERN Stack',
    duration: 'Duration: 2 months'
  }
];

const ResumeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <Container>
      <ProjectsContainer>
      <h1 style={{ color: '#52e0c4' }}>Recent Projects</h1>
        {currentIndex > 0 && <PrevButton onClick={prevProject}>{'<'}</PrevButton>}
        <ProjectDescription
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectDetails>
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <ProjectTech>{projects[currentIndex].tech}</ProjectTech>
            <ProjectDuration>{projects[currentIndex].duration}</ProjectDuration>
          </ProjectDetails>
        </ProjectDescription>
        {currentIndex < projects.length - 1 && <NextButton onClick={nextProject}>{'>'}</NextButton>}
      </ProjectsContainer>
      <DownloadButton href="/Resume.pdf" download="Resume.pdf">
        Download Resume
      </DownloadButton>
    </Container>
  );
};

export default ResumeSection;
