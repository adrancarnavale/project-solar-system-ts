import styled from 'styled-components';

const StyledPlanet = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  margin: 10px;
`;

const StyledPlanetImage = styled.img`
  height: 180px;
  width: 240px;
`;

export {
  StyledPlanet,
  StyledPlanetImage,
};
