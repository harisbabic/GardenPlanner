import React, { useState } from 'react';
import theme from './themeConfig';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../redux/actions/themeActions';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Tooltip = styled.span`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  &:hover .tooltiptext {
    visibility: visible;
  }

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltiptext {
    opacity: 1;
  }
`;

const ThemeCustomizer = () => {
  const [primaryColor, setPrimaryColor] = useState(theme.colors.primary);
  const [secondaryColor, setSecondaryColor] = useState(theme.colors.secondary);
  const dispatch = useDispatch();

  const handleUpdateTheme = () => {
    dispatch(updateTheme({ primary: primaryColor, secondary: secondaryColor }));
  };

  return (
    <Container>
      <h3>Customize Theme</h3>
      <Label>
        Primary Color:
        <Tooltip>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
          <span className="tooltiptext">Changes the main color used in buttons and highlights.</span>
        </Tooltip>
      </Label>
      <Label>
        Secondary Color:
        <Tooltip>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
          <span className="tooltiptext">Changes the hover color for buttons and links.</span>
        </Tooltip>
      </Label>
      <button onClick={handleUpdateTheme}>Apply Theme</button>
    </Container>
  );
};

export default ThemeCustomizer;
