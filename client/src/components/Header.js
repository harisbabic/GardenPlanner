import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.padding};
  color: white;
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSize};
`;

const Header = () => {
  const theme = useSelector(state => state.theme);

  return (
    <HeaderWrapper theme={theme}>
      <h1>Garden Planner</h1>
    </HeaderWrapper>
  );
};

export default Header;
