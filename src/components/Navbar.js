import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #0a192f;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #ccd6f6;
  text-decoration: none; /* Remove the underline */
  margin: 0 1rem;
  font-size: 1.1rem;
  transition: color 0.3s ease; /* Smooth color transition */

  &:hover {
    color: #64ffda; /* Change color on hover */
  }
`;

const NavItems = styled.div`
  display: flex;
  margin-left: auto; /* Push items to the right */
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Lo.</NavLink>
      <NavItems>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Skills</NavLink>
        <NavLink to="/resume">My Works</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
