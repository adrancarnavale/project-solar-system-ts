/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from '../../pages/Home';

describe('Tests the Header component', () => {
  it('The correct Header is shown in the screen', () => {
    render(<Home />);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
  });
});
