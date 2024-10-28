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

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
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
        </motion.div>
      </TextBox>
      <ImgBox>
        <Img src="/Pro.jpg" alt="Hero" />
      </ImgBox>
    </Container>
  );
};

export default Hero;
