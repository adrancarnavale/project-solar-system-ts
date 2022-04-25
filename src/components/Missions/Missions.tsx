import React from 'react';
import { MissionsHeader } from '../MissionsHeader';
import { Missions as SpaceMissions } from '../../data';
import { Mission } from '../Mission';
import { StyledMissionsContainer, StyledContainer } from './StyledMissions';

function Missions() {
  return (
    <StyledContainer>
      <MissionsHeader />
      <StyledMissionsContainer>
        {
          SpaceMissions.map(
            (mission) => <Mission key={mission.name} mission={mission} />,
          )
        }
      </StyledMissionsContainer>
    </StyledContainer>
  );
}

export default Missions;
