import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
 `;

const StyledPlanetsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
`;

export {
  StyledContainer,
  StyledPlanetsList,
};
