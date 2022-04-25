/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the Missions component', () => {
  it('The correct Quantity of missions is shown in the screen', () => {
    render(<Home />);
    const missions = screen.getAllByTestId('space-mission');
    expect(missions).toHaveLength(20);
  });
});
