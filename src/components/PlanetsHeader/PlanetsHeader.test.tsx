/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the PlanetsHeader component', () => {
  it('The correct Header is shown in the screen', () => {
    render(<Home />);
    const missions = screen.getByRole('heading', { level: 2, name: /planets/i });
    expect(missions).toBeInTheDocument();
  });
});
