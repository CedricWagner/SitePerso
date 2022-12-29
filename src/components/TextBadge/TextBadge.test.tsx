import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextBadge from './TextBadge';

describe('<TextBadge />', () => {
  test('it should mount', () => {
    render(<TextBadge />);
    
    const textBadge = screen.getByTestId('TextBadge');

    expect(textBadge).toBeInTheDocument();
  });
});