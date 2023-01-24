import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PanelUnderConstruction from './PanelUnderConstruction';

describe('<PanelUnderConstruction />', () => {
  test('it should mount', () => {
    render(<PanelUnderConstruction />);
    
    const panelUnderConstruction = screen.getByTestId('PanelUnderConstruction');

    expect(panelUnderConstruction).toBeInTheDocument();
  });
});