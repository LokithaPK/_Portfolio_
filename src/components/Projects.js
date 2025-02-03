import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  padding: 20px 50px;
  background: #0a192f;
  color: #ccd6f6;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #64ffda;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px;
`;

const SkillCard = styled(motion.div)`
  background: #112240;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  color: #8892b0;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsGrid>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SkillTitle>Programming</SkillTitle>
          <SkillDescription>
            Proficient in JavaScript, React.js, HTML, and CSS with experience in building interactive web applications.
          </SkillDescription>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillTitle>Analytical</SkillTitle>
          <SkillDescription>
            Strong problem-solving skills with the ability to analyze complex issues and develop effective solutions.
          </SkillDescription>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SkillTitle>Communication</SkillTitle>
          <SkillDescription>
            Excellent verbal and written communication skills, with experience in presenting technical information clearly and effectively.
          </SkillDescription>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SkillTitle>Problem-Solving</SkillTitle>
          <SkillDescription>
            Demonstrates the ability to address and resolve complex issues through logical thinking and creative solutions.
          </SkillDescription>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SkillTitle>Team Collaboration</SkillTitle>
          <SkillDescription>
            Experienced in working effectively within teams, contributing to group projects, and fostering a collaborative environment.
          </SkillDescription>
        </SkillCard>
        <SkillCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SkillTitle>Adaptability</SkillTitle>
          <SkillDescription>
            Able to quickly adapt to new technologies and methodologies, ensuring continuous learning and growth.
          </SkillDescription>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
