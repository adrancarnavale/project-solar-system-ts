import React from 'react';
import { IProps } from './types';
import { StyledPlanet, StyledPlanetImage } from './PlanetStyles';

function Planet({ planet: { name, image } }: IProps) {
  return (
    <StyledPlanet>
      <p>{name}</p>
      <StyledPlanetImage src={image} alt={name} />
    </StyledPlanet>
  );
}

export default Planet;
