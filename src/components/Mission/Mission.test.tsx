/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the Mission component', () => {
  it('The correct Data is shown in the screen', () => {
    render(<Home />);
    const mission = screen.getByText(/apollo/i);
    const year = screen.getByText(/1960/i);
    const country = screen.getAllByText(/estados unidos/i);
    const destination = screen.getByText(/lua/i);

    expect(mission).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(country[0]).toBeInTheDocument();
    expect(destination).toBeInTheDocument();
  });
});
