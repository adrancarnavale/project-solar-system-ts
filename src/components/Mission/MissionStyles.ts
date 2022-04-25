import styled from 'styled-components';

const StyledMission = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  margin: 10px;
  width: 200px;
  height: 200px;
`;

const StyledMissionInfo = styled.p`
  text-align: center;
`;

export {
  StyledMission,
  StyledMissionInfo,
};
