import React from 'react';
import { IProps } from './types';
import { StyledMission, StyledMissionInfo } from './MissionStyles';

function Mission({
  mission: {
    name, year, country, destination,
  },
}: IProps) {
  return (
    <StyledMission data-testid="space-mission">
      <StyledMissionInfo>{name}</StyledMissionInfo>
      <StyledMissionInfo>{year}</StyledMissionInfo>
      <StyledMissionInfo>{country}</StyledMissionInfo>
      <StyledMissionInfo>{destination}</StyledMissionInfo>
    </StyledMission>
  );
}

export default Mission;
