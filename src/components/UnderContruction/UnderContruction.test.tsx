import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UnderContruction from './UnderContruction';

describe('<UnderContruction />', () => {
  test('it should mount', () => {
    render(<UnderContruction />);
    
    const underContruction = screen.getByTestId('UnderContruction');

    expect(underContruction).toBeInTheDocument();
  });
});