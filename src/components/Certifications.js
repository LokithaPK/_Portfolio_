import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const CertificationsContainer = styled.div`
  padding: 4rem 15rem;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const CertificationItem = styled(motion.div)`
  background: linear-gradient(135deg, #112240, #223355);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 255, 204, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.8s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 255, 204, 0.5);
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const CertificationOrg = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const CertificationDate = styled.p`
  font-size: 1rem;
  color: #8892b0;
`;

const GlowLine = styled.div`
  height: 3px;
  background: linear-gradient(90deg, transparent, #64ffda, transparent);
  margin: 1rem 0;
  animation: glowingLine 1.5s infinite alternate;

  @keyframes glowingLine {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const CertificationsSection = () => {
  return (
    <CertificationsContainer>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ color: '#52e0c4' }}
>Certifications
</motion.h1>
      <GlowLine />
      <CertificationItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CertificationTitle>Advanced Diploma in Java Programming</CertificationTitle>
        <CertificationOrg>CS Academy</CertificationOrg>
        <CertificationDate>Issued: January 2022</CertificationDate>
        <p>
          This diploma program provided comprehensive training in Java programming, covering both fundamental and
          advanced concepts. I learned object-oriented programming (OOP) principles, algorithms.
          Additionally, I gained experience in debugging, testing, and optimizing Java programs for
          performance. This diploma has equipped me with the skills to develop robust, scalable, and maintainable Java
          applications.
        </p>
      </CertificationItem>
      <GlowLine />
      <CertificationItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CertificationTitle>Database Management System</CertificationTitle>
        <CertificationOrg>Infosys</CertificationOrg>
        <CertificationDate>Issued: May 2024</CertificationDate>
        <p>
          During this certification program, I gained in-depth knowledge of database concepts, including relational
          database management systems (RDBMS), SQL, and normalization techniques. I also learned how to
          design, implement, and manage complex databases to support various applications. This certification has strengthened my ability to
          handle real-world database challenges effectively.
        </p>
      </CertificationItem>
      <GlowLine />
    </CertificationsContainer>
  );
};

export default CertificationsSection;