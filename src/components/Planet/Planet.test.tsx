/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the Planet component', () => {
  it('The correct data is shown in the screen', () => {
    render(<Home />);
    const planetName = screen.getByText(/netuno/i);
    expect(planetName).toBeInTheDocument();
  });
});
