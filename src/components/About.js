import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 100px 20px;
  background: #0a192f;
  color: #ccd6f6;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const AchievementsContainer = styled.div`
  margin-top: 2rem;
`;

const AchievementsTitle = styled.h3`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ExperiencesContainer = styled.div`
  margin-top: 2rem;
`;

const ExperiencesTitle = styled.h3`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        I am a web developer with a strong passion for creating dynamic and interactive web applications. As a fresher, I bring a robust foundational knowledge of the industry and am eager to contribute to innovative projects. My focus is on delivering high-quality solutions that meet client needs and create engaging user experiences.
      </AboutContent>

      <AchievementsContainer>
        <AchievementsTitle>Achievements</AchievementsTitle>
        <AchievementList>
          <AchievementItem>Completed a comprehensive web development bootcamp with a focus on React.js and modern web technologies.</AchievementItem>
          <AchievementItem>Developed a personal portfolio website showcasing various projects and skills, built with React.js and styled-components.</AchievementItem>
          <AchievementItem>Successfully implemented a Java-based guessing game with a user-friendly interface, demonstrating problem-solving skills and technical proficiency.</AchievementItem>
        </AchievementList>
      </AchievementsContainer>

      
    </AboutContainer>
  );
};

export default About;
