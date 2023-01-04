import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PictoButton from './PictoButton';

describe('<PictoButton />', () => {
  test('it should mount', () => {
    render(<PictoButton />);
    
    const pictoButton = screen.getByTestId('PictoButton');

    expect(pictoButton).toBeInTheDocument();
  });
});