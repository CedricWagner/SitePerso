import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PanelWaiting from './PanelWaiting';

describe('<PanelWaiting />', () => {
  test('it should mount', () => {
    render(<PanelWaiting />);
    
    const panelWaiting = screen.getByTestId('PanelWaiting');

    expect(panelWaiting).toBeInTheDocument();
  });
});