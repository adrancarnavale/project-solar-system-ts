import React from 'react';
import { Header } from '../../components/Header';
import { Planets } from '../../components/Planets';
import { Missions } from '../../components/Missions';
import { StyledHomePage } from './HomeStyles';

function Home() {
  return (
    <StyledHomePage>
      <Header />
      <Planets />
      <Missions />
    </StyledHomePage>
  );
}

export default Home;
