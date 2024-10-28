import React from 'react';
import styled from 'styled-components';

const CertificationsContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const CertificationItem = styled.div`
  background-color: #112240;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CertificationTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #64ffda;
`;

const CertificationOrg = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CertificationDate = styled.p`
  font-size: 1rem;
  color: #8892b0;
`;

const CertificationsSection = () => {
  return (
    <CertificationsContainer>
      <h2>Certifications</h2>
      <CertificationItem>
        <CertificationTitle>Advanced Diploma in Java Programming</CertificationTitle>
        <CertificationOrg>CS Academy</CertificationOrg>
        <CertificationDate>Issued: January 2022</CertificationDate>
        <p>This diploma program provided comprehensive training in Java programming, covering both fundamental and advanced concepts. I learned object-oriented programming (OOP) principles, data structures, algorithms, and Java-specific frameworks such as Spring and Hibernate. The course emphasized practical application, and I completed several projects, including developing a multi-threaded application and implementing a RESTful web service. Additionally, I gained experience in debugging, testing, and optimizing Java applications for performance. This diploma has equipped me with the skills to develop robust, scalable, and maintainable Java applications.</p>
      </CertificationItem>
      <CertificationItem>
        <CertificationTitle>Database Management System</CertificationTitle>
        <CertificationOrg>Infosys</CertificationOrg>
        <CertificationDate>Issued: May 2024</CertificationDate>
        <p>During this certification program, I gained in-depth knowledge of database concepts, including relational database management systems (RDBMS), SQL, data modeling, and normalization techniques. The course covered advanced topics like indexing, stored procedures, and database optimization strategies. I also learned how to design, implement, and manage complex databases to support various applications. A significant achievement was developing a fully functional database system for a hypothetical e-commerce platform, optimizing query performance, and ensuring data integrity and security. This certification has strengthened my ability to handle real-world database challenges effectively.
</p>
      </CertificationItem>

    </CertificationsContainer>
  );
};

export default CertificationsSection;
