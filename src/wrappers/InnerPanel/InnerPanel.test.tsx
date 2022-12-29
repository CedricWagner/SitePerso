import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InnerPanel from './InnerPanel';

describe('<InnerPanel />', () => {
  test('it should mount', () => {
    render(<InnerPanel />);
    
    const innerPanel = screen.getByTestId('InnerPanel');

    expect(innerPanel).toBeInTheDocument();
  });
});