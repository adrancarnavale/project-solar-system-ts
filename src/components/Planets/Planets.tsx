import React from 'react';
import { PlanetsHeader } from '../PlanetsHeader';
import { Planets as PlanetsList } from '../../data';
import { Planet } from '../Planet';
import { StyledContainer, StyledPlanetsList } from './StyledPlanets';

function Planets() {
  return (
    <StyledContainer>
      <PlanetsHeader />
      <StyledPlanetsList>
        {
          PlanetsList.map(
            (planet) => <Planet key={planet.name} planet={planet} />,
          )
        }
      </StyledPlanetsList>
    </StyledContainer>
  );
}

export default Planets;
