import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoItem from './InfoItem';

describe('<InfoItem />', () => {
  test('it should mount', () => {
    render(<InfoItem />);
    
    const infoItem = screen.getByTestId('InfoItem');

    expect(infoItem).toBeInTheDocument();
  });
});