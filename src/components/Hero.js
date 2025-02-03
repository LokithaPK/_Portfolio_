import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: #0a192f;
  color: #ccd6f6;
  text-align: center;
  padding: 0 2rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  max-width: 80%;
  line-height: 1.5;
  margin-left: 80px; 
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 370px;
  height: 370px; 
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #64ffda;
  box-shadow: 0 0 12px #64ffda;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const Hero = () => {
  return (
    <Container>
      <TextBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Title>Hi There! 👋</Title>
          <SubTitle>I'M LOKITHA</SubTitle>
          <p>Developer</p>
          <Description>
            I am a web developer passionate about building dynamic and interactive web applications. 
            I focus on creating high-quality solutions that enhance user experience.
          </Description>
        </motion.div>
      </TextBox>
      <ImgBox>
        <ProfileImage src={`${process.env.PUBLIC_URL}/Loki.jpg`} alt="Profile" />
      </ImgBox>
    </Container>
  );
};

export default Hero;
