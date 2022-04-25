/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the MissionsHeader component', () => {
  it('The correct Header is shown in the screen', () => {
    render(<Home />);
    const missions = screen.getByRole('heading', { name: /missions/i });
    expect(missions).toBeInTheDocument();
  });
});
