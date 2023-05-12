import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkipToContent from './SkipToContent';

describe('<SkipToContent />', () => {
  test('it should mount', () => {
    render(<SkipToContent />);
    
    const skipToContent = screen.getByTestId('SkipToContent');

    expect(skipToContent).toBeInTheDocument();
  });
});