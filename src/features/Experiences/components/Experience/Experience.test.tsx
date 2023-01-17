import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Experience from './Experience';

describe('<Experience />', () => {
  test('it should mount', () => {
    render(<Experience />);
    
    const experience = screen.getByTestId('Experience');

    expect(experience).toBeInTheDocument();
  });
});