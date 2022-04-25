/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the Planets component', () => {
  it('The correct Quantity of missions is shown in the screen', () => {
    render(<Home />);
    const planets = screen.getAllByTestId('planet');
    expect(planets).toHaveLength(8);
  });
});
