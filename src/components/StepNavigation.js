import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StepNavigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Link to="/step1" className={location.pathname === '/step1' ? 'active' : ''}>Step 1</Link>
      <Link to="/step2" className={location.pathname === '/step2' ? 'active' : ''}>Step 2</Link>
      <Link to="/step3" className={location.pathname === '/step3' ? 'active' : ''}>Step 3</Link>
    </NavContainer>
  );
};

export default StepNavigation;
